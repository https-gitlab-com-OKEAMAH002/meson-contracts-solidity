const { ethers } = require('hardhat')
const { EthersProviderWrapper } = require("@nomiclabs/hardhat-ethers/internal/ethers-provider-wrapper");

module.exports = class CustomGasFeeProviderWrapper extends EthersProviderWrapper {
  async getFeeData() {
    const result = await super.getFeeData()
    // For Polygon
    // result.maxFeePerGas = result.gasPrice.add(50)
    // result.maxPriorityFeePerGas = result.gasPrice
    // result.maxFeePerGas = null
    // result.maxPriorityFeePerGas = null
    // result.gasPrice = ethers.BigNumber.from(300_000_000_000)
    console.log(result)
    return result
  }

  async estimateGas(transaction) {
    const estimated = await super.estimateGas(transaction)
    console.log(estimated)
    return estimated
  }
}
