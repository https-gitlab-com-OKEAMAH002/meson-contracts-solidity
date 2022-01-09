/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonStatesTest,
  MesonStatesTestInterface,
} from "../MesonStatesTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "ts",
        type: "uint64",
      },
    ],
    name: "addRecentSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCoinType",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getRecentSwap",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "metaAmount",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "ts",
            type: "uint64",
          },
        ],
        internalType: "struct MesonHelpers.Swap",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getRecentSwapList",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "_length",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_tail",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_head",
            type: "uint256",
          },
          {
            internalType: "bytes32[]",
            name: "_items",
            type: "bytes32[]",
          },
        ],
        internalType: "struct List.Bytes32List",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "removeExpiredSwaps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "supportedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "totalDemandFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "totalSupplyFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
        type: "uint256",
      },
    ],
    name: "updateDemand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040526052608081815290610cad60a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d457600080fd5b50604051610cff380380610cff8339810160408190526100f3916101e6565b6100fc81610102565b50610216565b6001600160a01b0381166000818152600160208181526040808420805460ff1916841790558051608081018252848152808301858152818301868152606083810181815298885260038087529490972083518155915195820195909555935160028501559451805194959461017f93928501929190910190610186565b5050505050565b8280548282559060005260206000209081019282156101c1579160200282015b828111156101c15782518255916020019190600101906101a6565b506101cd9291506101d1565b5090565b5b808211156101cd57600081556001016101d2565b6000602082840312156101f857600080fd5b81516001600160a01b038116811461020f57600080fd5b9392505050565b610a88806102256000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806368c4ac261161007157806368c4ac261461016457806379fcd8ee146101975780637d9c0d85146101aa57806381326dbc146101bd57806394149c1a146101dd578063a8f81b1a146101f257600080fd5b80631139ece0146100ae57806315d0975c146100c35780632c89e9ef146100d6578063456081d71461011a57806361565d251461012d575b600080fd5b6100c16100bc36600461092f565b61021b565b005b6100c16100d1366004610905565b6102e6565b6100e96100e4366004610905565b6102f4565b6040805182518152602080840151908201529181015167ffffffffffffffff16908201526060015b60405180910390f35b6100c16101283660046108e3565b610363565b61015661013b3660046108e3565b6001600160a01b031660009081526004602052604090205490565b604051908152602001610111565b6101876101723660046108e3565b60016020526000908152604090205460ff1681565b6040519015158152602001610111565b6100c16101a5366004610905565b61036f565b6100c16101b8366004610905565b610379565b6101d06101cb3660046108e3565b610383565b6040516101119190610984565b604051632000000f60e21b8152602001610111565b6101566102003660046108e3565b6001600160a01b031660009081526005602052604090205490565b60408051606081018252848152602080820185815267ffffffffffffffff8581168486019081526001600160a01b038a16600081815260028087528882208c835287528882208851815595516001870155925194909201805467ffffffffffffffff191694909316939093179091559081526003909152919091206102a09085610444565b6001600160a01b0385166000908152600560205260409020546102c390846104f1565b6001600160a01b0390951660009081526005602052604090209490945550505050565b6102f0828261050c565b5050565b6040805160608082018352600080835260208084018290529284018190526001600160a01b038616815260028084528482208683528452908490208451928301855280548352600181015493830193909352919091015467ffffffffffffffff16918101919091525b92915050565b61036c816105a3565b50565b6102f082826106dd565b6102f08282610700565b6103ae6040518060800160405280600081526020016000815260200160008152602001606081525090565b6001600160a01b038216600090815260036020818152604092839020835160808101855281548152600182015481840152600282015481860152928101805485518185028101850190965280865293949193606086019383018282801561043457602002820191906000526020600020905b815481526020019060010190808311610420575b5050505050815250509050919050565b600180830154610453916109f4565b82600101541061049a5760405162461bcd60e51b815260206004820152600d60248201526c6c697374206f766572666c6f7760981b60448201526064015b60405180910390fd5b81546104af57600182015460028301556104c5565b60028201546104bf9060016109f4565b60028301555b60038201805460018181018355600092835260209092200182905582546104eb916109f4565b90915550565b6000826104fe83826109f4565b915081101561035d57600080fd5b6001600160a01b0382166000908152600460205260409020548111156105605760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b6044820152606401610491565b6001600160a01b03821660009081526004602052604090205461058390826107fb565b6001600160a01b0390921660009081526004602052604090209190915550565b6001600160a01b03811660009081526003602052604081204291806105c783610816565b915091505b81801561062257506001600160a01b0385166000908152600260208181526040808420858552909152909120015467ffffffffffffffff8086169161061691620151809116610a0c565b67ffffffffffffffff16105b156106d6576001600160a01b038516600090815260056020908152604080832054600283528184208585529092529091206001015461066191906107fb565b6001600160a01b0386166000908152600560205260409020556106838361085c565b50506001600160a01b03851660009081526002602081815260408084208585529091528220828155600181019290925501805467ffffffffffffffff191690556106cc83610816565b90925090506105cc565b5050505050565b6001600160a01b03821660009081526004602052604090205461058390826104f1565b6040514260c081901b6001600160c01b0319166020830152606084901b6bffffffffffffffffffffffff19166028830152603c820183905290600090605c0160408051808303601f19018152828252805160209182012060608401835280845281840187815267ffffffffffffffff8781168686019081526001600160a01b038b166000818152600280885288822087835288528882208a51815595516001870155925194909201805467ffffffffffffffff1916949093169390931790915590815260039092529190209092506107d89083610444565b6001600160a01b0385166000908152600560205260409020546102c390856104f1565b6000826108088382610a38565b915081111561035d57600080fd5b8054600090819015610851578260030183600101548154811061083b5761083b610a65565b9060005260206000200154905060019150915091565b506000905080915091565b8054600090819061087257506000905080915091565b8260030183600101548154811061088b5761088b610a65565b90600052602060002001549050826001015460016108a991906109f4565b60018085019190915583546108be9190610a38565b90925550600191565b80356001600160a01b03811681146108de57600080fd5b919050565b6000602082840312156108f557600080fd5b6108fe826108c7565b9392505050565b6000806040838503121561091857600080fd5b610921836108c7565b946020939093013593505050565b6000806000806080858703121561094557600080fd5b61094e856108c7565b93506020850135925060408501359150606085013567ffffffffffffffff8116811461097957600080fd5b939692955090935050565b6000602080835260a0830184518285015281850151604085015260408501516060850152606085015160808086015281815180845260c0870191508483019350600092505b808310156109e957835182529284019260019290920191908401906109c9565b509695505050505050565b60008219821115610a0757610a07610a4f565b500190565b600067ffffffffffffffff808316818516808303821115610a2f57610a2f610a4f565b01949350505050565b600082821015610a4a57610a4a610a4f565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type MesonStatesTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonStatesTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonStatesTest__factory extends ContractFactory {
  constructor(...args: MesonStatesTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonStatesTest> {
    return super.deploy(token, overrides || {}) as Promise<MesonStatesTest>;
  }
  getDeployTransaction(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  attach(address: string): MesonStatesTest {
    return super.attach(address) as MesonStatesTest;
  }
  connect(signer: Signer): MesonStatesTest__factory {
    return super.connect(signer) as MesonStatesTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonStatesTestInterface {
    return new utils.Interface(_abi) as MesonStatesTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonStatesTest {
    return new Contract(address, _abi, signerOrProvider) as MesonStatesTest;
  }
}
