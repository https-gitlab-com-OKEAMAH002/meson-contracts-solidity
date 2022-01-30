import type { Wallet } from '@ethersproject/wallet'
import type { Meson } from '@mesonfi/contract-types'

import { keccak256 } from '@ethersproject/keccak256'
import { SwapSigner } from './SwapSigner'
import { SwapRequestWithSigner } from './SwapRequestWithSigner'
import { SignedSwapCommonData, SignedSwapRequest, SignedSwapReleaseData } from './SignedSwap'

export interface PartialSwapRequest {
  inToken: string,
  amount: string,
  fee: string,
  outToken: string,
  recipient: string,
}

export class MesonClient {
  readonly mesonInstance: Meson
  readonly chainId: number
  readonly coinType: string
  readonly signer: SwapSigner

  static async Create(mesonInstance: Meson) {
    const network = await mesonInstance.provider.getNetwork()
    const coinType = await mesonInstance.getCoinType()
    return new MesonClient(mesonInstance, Number(network.chainId), coinType)
  }

  constructor(mesonInstance: any, chainId: number, coinType: string) {
    this.mesonInstance = mesonInstance as Meson
    this.chainId = chainId
    this.coinType = coinType
    this.signer = new SwapSigner(mesonInstance.address, chainId)
  }

  requestSwap(outChain: string, swap: PartialSwapRequest, lockPeriod: number = 5400) {
    return new SwapRequestWithSigner({
      ...swap,
      inChain: this.coinType,
      outChain,
      expireTs: Math.floor(Date.now() / 1000) + lockPeriod,
    }, this.signer)
  }

  private _check (swap: SignedSwapCommonData) {
    if (this.chainId !== swap.chainId) {
      throw new Error('Mismatch chain id')
    } else if (this.mesonInstance.address !== swap.mesonAddress) {
      throw new Error('Mismatch messon address')
    }
  }

  async postSwap(signedRequest: SignedSwapRequest) {
    this._check(signedRequest)
    return this.mesonInstance.postSwap(
      signedRequest.encode(),
      signedRequest.initiator,
      ...signedRequest.signature,
      1 // provider index
    )
  }

  async executeSwap(signedRelease: SignedSwapReleaseData, encoded: string, depositToPool: boolean = false) {
    this._check(signedRelease)
    return this.mesonInstance.executeSwap(
      encoded,
      keccak256(signedRelease.recipient),
      ...signedRelease.signature,
      depositToPool
    )
  }
  
  async lock(signedRequest: SignedSwapRequest, domainHash: string) {
    this._check(signedRequest)
    return this.mesonInstance.lock(
      signedRequest.encode(),
      domainHash,
      signedRequest.initiator,
      ...signedRequest.signature
    )
  }

  async release(signedRequest: SignedSwapRequest, signedRelease: SignedSwapReleaseData) {
    this._check(signedRelease)
    return this.mesonInstance.release(
      signedRequest.encode(),
      signedRelease.domainHash,
      signedRequest.initiator,
      signedRelease.recipient,
      ...signedRelease.signature
    )
  }

  async cancelSwap(swapId: string, signer?: Wallet) {
    if (signer) {
      return await this.mesonInstance.connect(signer).cancelSwap(swapId)
    }
    return await this.mesonInstance.cancelSwap(swapId)
  }

  async getSwap(swapId: string) {
    // return await this.mesonInstance.requests(swapId)
  }

  async getLockingSwap(swapId: string) {
    return await this.mesonInstance.lockingSwaps(swapId)
  }
}
