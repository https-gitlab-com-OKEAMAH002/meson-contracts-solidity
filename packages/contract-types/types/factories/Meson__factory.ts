/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Meson, MesonInterface } from "../Meson";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_supportedTokens",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapBonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "SwapLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expireTs",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inToken",
        type: "address",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapRequested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "bondSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "challenge",
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
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "recipient",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "executeSwap",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "lockingSwaps",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
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
      {
        internalType: "uint64",
        name: "until",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "postSwap",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
    ],
    name: "requestSwap",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "expireTs",
        type: "uint64",
      },
    ],
    stateMutability: "view",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "unlock",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040526052608081815290620024d060a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120600055348015620000d657600080fd5b506040516200252238038062002522833981016040819052620000f9916200025a565b60005b81518110156200014857620001338282815181106200011f576200011f6200035d565b60200260200101516200015060201b60201c565b806200013f8162000333565b915050620000fc565b505062000389565b6001600160a01b0381166000818152600160208181526040808420805460ff19168417905580516080810182528481528083018581528183018681526060838101818152988852600380875294909720835181559151958201959095559351600285015594518051949594620001cf93928501929190910190620001d6565b5050505050565b82805482825590600052602060002090810192821562000214579160200282015b8281111562000214578251825591602001919060010190620001f7565b506200022292915062000226565b5090565b5b8082111562000222576000815560010162000227565b80516001600160a01b03811681146200025557600080fd5b919050565b600060208083850312156200026e57600080fd5b82516001600160401b03808211156200028657600080fd5b818501915085601f8301126200029b57600080fd5b815181811115620002b057620002b062000373565b8060051b604051601f19603f83011681018181108582111715620002d857620002d862000373565b604052828152858101935084860182860187018a1015620002f857600080fd5b600095505b83861015620003265762000311816200023d565b855260019590950194938601938601620002fd565b5098975050505050505050565b60006000198214156200035657634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61213780620003996000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063a8f81b1a116100a2578063eb69e45011610071578063eb69e45014610325578063ec9b5b3a14610338578063f3fef3a31461034b578063f7888aec1461035e578063f7d18c5a1461038957600080fd5b8063a8f81b1a146102d6578063bcc20ff6146102ff578063d2ef73981461012e578063d541beb31461031257600080fd5b806361565d25116100e957806361565d251461017c57806368c4ac26146101a55780636bb39ae0146101d857806394149c1a1461026d5780639d8669851461028257600080fd5b80631548fdce1461011b5780632976bb51146101305780633b11d5ac1461014357806347e7ef2414610169575b600080fd5b61012e610129366004611d2b565b61039c565b005b61012e61013e366004611e65565b610497565b610156610151366004611ecf565b6105ef565b6040519081526020015b60405180910390f35b61012e610177366004611cdf565b61073f565b61015661018a366004611c8a565b6001600160a01b031660009081526004602052604090205490565b6101c86101b3366004611c8a565b60016020526000908152604090205460ff1681565b6040519015158152602001610160565b61022c6101e6366004611d2b565b600860205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169390911691906001600160401b031685565b604080516001600160a01b0396871681529486166020860152929094169183019190915260608201526001600160401b03909116608082015260a001610160565b604051632000000f60e21b8152602001610160565b61022c610290366004611d2b565b600660205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169390911691906001600160401b031685565b6101566102e4366004611c8a565b6001600160a01b031660009081526005602052604090205490565b61015661030d366004611f13565b6107e9565b61012e610320366004611d2b565b610a12565b61012e610333366004611d8a565b610c73565b61012e610346366004611d2b565b610edb565b61012e610359366004611cdf565b6110a1565b61015661036c366004611cac565b600760209081526000928352604080842090915290825290205481565b61012e610397366004611d44565b6110f2565b60008181526006602052604090206003015481906103d55760405162461bcd60e51b81526004016103cc90611ff9565b60405180910390fd5b6000828152600660205260409020600101546001600160a01b03161561043d5760405162461bcd60e51b815260206004820152601f60248201527f7377617020626f6e64656420746f20616e6f746865722070726f76696465720060448201526064016103cc565b60008281526006602090815260409182902060010180546001600160a01b03191633179055815184815291517f9dadb60bc000bbd7b49430723ed56b6aa35909dcab91ec2cb17ed5da7ae4ffd69281900390910190a15050565b60008581526006602052604090206003015485906104c75760405162461bcd60e51b81526004016103cc90611ff9565b6000868152600660209081526040808320815160a08101835281546001600160a01b039081168083526001840154821683870152600284015490911693820193909352600382015460608201526004909101546001600160401b0316608082015288519289019290922092549192610543928a928989896113a4565b604080820151602080840151606085015160008c8152600690935293822080546001600160a01b0319908116825560018201805482169055600282018054909116905560038101929092556004909101805467ffffffffffffffff1916905590916105af83838361154b565b6040518a81527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d2062906020015b60405180910390a150505050505050505050565b6001600160a01b038116600090815260016020526040812054829060ff166106295760405162461bcd60e51b81526004016103cc90611fce565b60008060006106388787611688565b92509250925060006106473390565b6040805160a0810182526001600160a01b038084168252600060208084018281528d8416858701908152606086018a81526001600160401b03808d16608089019081528e8752600690955297909420955186549086166001600160a01b03199182161787559151600187018054918716918416919091179055516002860180549190951691161790925551600383015551600490910180549190921667ffffffffffffffff1990911617905590506107008782846118ee565b6040518481527fa67aeefca6ffac499b56c6e714636f7ade5d82fde82aef50665ad3e88be5cb4b9060200160405180910390a150919695505050505050565b6001600160a01b038216600090815260016020526040902054829060ff166107795760405162461bcd60e51b81526004016103cc90611fce565b6001600160a01b0383166000908152600760209081526040808320338085529252909120546107a89084611976565b6001600160a01b038086166000908152600760209081526040808320938616835292905220556107d88484611997565b6107e38482856118ee565b50505050565b6001600160a01b038516600090815260016020526040812054869060ff166108235760405162461bcd60e51b81526004016103cc90611fce565b60008060006108328b8b611688565b60408051600081526020810180835285905260ff8b1691810191909152606081018c9052608081018b9052929550909350915060019060a0016020604051602081039080840390855afa15801561088d573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b0316146108eb5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016103cc565b6040805160a0810182526001600160a01b038b811682523360208084018281528f8416858701908152606086018881526001600160401b038a81166080890190815260008d8152600690965298909420965187546001600160a01b031990811691881691909117885592516001880180548516918816919091179055905160028701805490931695169490941790559151600384015592516004909201805467ffffffffffffffff1916929091169190911790556109aa8b8b846118ee565b604080518581526001600160401b03851660208201529081018390526001600160a01b038c1660608201527ff3c3b2928ca3aaa9c73469b9a28d8a4ebaa18b9698b443162ee5d8c77fe05d6c9060800160405180910390a150919a9950505050505050505050565b6000818152600660205260409020600301548190610a425760405162461bcd60e51b81526004016103cc90611ff9565b60008281526006602052604090206004015482906001600160401b03428116911610610aa35760405162461bcd60e51b815260206004820152601060248201526f1cddd85c081b9bdd08195e1c1a5c995960821b60448201526064016103cc565b6000600660008581526020019081526020016000206040518060a00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600382015481526020016004820160009054906101000a90046001600160401b03166001600160401b03166001600160401b031681525050905060008160400151905060008260000151905060008360600151905060066000888152602001908152602001600020600080820160006101000a8154906001600160a01b0302191690556001820160006101000a8154906001600160a01b0302191690556002820160006101000a8154906001600160a01b03021916905560038201600090556004820160006101000a8154906001600160401b0302191690555050610c3783838361154b565b6040518781527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a150505050505050565b6000878152600860208181526040808420815160a08101835281546001600160a01b0390811682526001830154811682860152600283015416928101929092526003810154606083018190526004909101546001600160401b03166080830152938b905291905290610d1d5760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b60448201526064016103cc565b8060600151861115610d8e5760405162461bcd60e51b815260206004820152603460248201527f72656c6561736520616d6f756e742063616e6e6f742062652067726561746572604482015273081d1a185b881b1bd8dada5b99c8185b5bdd5b9d60621b60648201526084016103cc565b6040516bffffffffffffffffffffffff19606089901b166020820152610dd7908990603401604051602081830303815290604052805190602001208784600001518888886113a4565b604081015160208201516060830151881015610e53576001600160a01b038083166000908152600760209081526040808320938516835292905220546060840151610e2c9190610e27908b6119da565b611976565b6001600160a01b038084166000908152600760209081526040808320938616835292905220555b60008a815260086020526040812080546001600160a01b031990811682556001820180548216905560028201805490911690556003810191909155600401805467ffffffffffffffff19169055610eab828a8a61154b565b6040518a81527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f4906020016105db565b600081815260086020526040902060030154610f2f5760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b60448201526064016103cc565b600081815260086020908152604091829020825160a08101845281546001600160a01b0390811682526001830154811693820193909352600282015490921692820192909252600382015460608201526004909101546001600160401b03908116608083018190524290911611610fe85760405162461bcd60e51b815260206004820152601960248201527f5468652073776170206973207374696c6c20696e206c6f636b0000000000000060448201526064016103cc565b60408082015160608301516020808501516001600160a01b038085166000908152600784528681209183168152925293902054919290916110299083611976565b6001600160a01b039384166000908152600760209081526040808320949096168252928352848120919091559485526008905250822080546001600160a01b03199081168255600182018054821690556002820180549091169055600381019290925550600401805467ffffffffffffffff19169055565b6001600160a01b038216600090815260016020526040902054829060ff166110db5760405162461bcd60e51b81526004016103cc90611fce565b336110e684846119f5565b6107e381828686611a6c565b6001600160a01b038116600090815260016020526040902054819060ff1661112c5760405162461bcd60e51b81526004016103cc90611fce565b6000831161117c5760405162461bcd60e51b815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064016103cc565b600085815260086020526040902060030154156111db5760405162461bcd60e51b815260206004820152601b60248201527f6c6f636b696e67207377617020616c726561647920657869737473000000000060448201526064016103cc565b6001600160a01b0382166000908152600760209081526040808320338085529252909120548411156112465760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b60448201526064016103cc565b6001600160a01b03808416600090815260076020908152604080832093851683529290522054611277908590612064565b6001600160a01b0380851660008181526007602090815260408083208786168085529083529281902095909555845160a081018652938a1684528301529181019190915260608101859052608081016112d26104b042612039565b6001600160401b03908116909152600088815260086020908152604091829020845181546001600160a01b03199081166001600160a01b0392831617835586840151600184018054831691841691909117905586850151600284018054909216908316179055606086015160038301556080909501516004909101805467ffffffffffffffff191691909416179092558051898152928416918301919091527faad18fe672f0d6b379db88b0e1176f10cc003e9a4d8ed142a90c0b6f8bedb8de910160405180910390a1505050505050565b6001600160a01b0384166113fa5760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016103cc565b60006040518060600160405280602b8152602001612100602b9139805160209182012060408051928301919091528101899052606081018890526080016040516020818303038152906040528051906020012090506000868260405160200161147a92919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa1580156114e2573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b0316146115405760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016103cc565b505050505050505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b179052915160009283928716916115d79190611f93565b6000604051808303816000865af19150503d8060008114611614576040519150601f19603f3d011682016040523d82523d6000602084013e611619565b606091505b50915091508180156116435750805115806116435750808060200190518101906116439190611d09565b6116815760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b60448201526064016103cc565b5050505050565b60008060008060008061169a88611b2e565b6040516bffffffffffffffffffffffff1960608c901b16602082015292955090935091508290603401604051602081830303815290604052805190602001201461171f5760405162461bcd60e51b81526020600482015260166024820152750d2dca8ded6cadc40c8decae640dcdee840dac2e8c6d60531b60448201526064016103cc565b6000811161177d5760405162461bcd60e51b815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e604482015264207a65726f60d81b60648201526084016103cc565b4261178a610e1082612039565b6001600160401b0316846001600160401b0316116117e15760405162461bcd60e51b81526020600482015260146024820152736578706972657320747320746f6f206561726c7960601b60448201526064016103cc565b6117ed611c2082612039565b6001600160401b0316846001600160401b0316106118435760405162461bcd60e51b81526020600482015260136024820152726578706972657320747320746f6f206c61746560681b60448201526064016103cc565b600061188c8a80516020918201206000546040805161190160f01b8186015260228101929092526042808301939093528051808303909301835260629091019052805191012090565b600081815260066020526040902060030154909150156118de5760405162461bcd60e51b815260206004820152600d60248201526c1cddd85c0818dbdb999b1a58dd609a1b60448201526064016103cc565b9650929450925050509250925092565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b15801561193e57600080fd5b505af1158015611952573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e39190611d09565b6000826119838382612021565b915081101561199157600080fd5b92915050565b6001600160a01b0382166000908152600460205260409020546119ba9082611976565b6001600160a01b0390921660009081526004602052604090209190915550565b6000826119e78382612064565b915081111561199157600080fd5b6001600160a01b038216600090815260046020526040902054811115611a495760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b60448201526064016103cc565b6001600160a01b0382166000908152600460205260409020546119ba90826119da565b6001600160a01b03808316600090815260076020908152604080832093871683529290522054811115611acd5760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b60448201526064016103cc565b6001600160a01b03808316600090815260076020908152604080832093871683529290522054611afd90826119da565b6001600160a01b038084166000908152600760209081526040808320938816835292905220556107e382858361154b565b600080600080600080600087806020019051810190611b4d9190611ded565b505093509350935093506040518060800160405280605881526020016120a860589139805190602001208414611bc55760405162461bcd60e51b815260206004820152601d60248201527f496e76616c69642073776170207265717565737420747970656861736800000060448201526064016103cc565b97919650945092505050565b80356001600160a01b0381168114611be857600080fd5b919050565b600082601f830112611bfe57600080fd5b81356001600160401b0380821115611c1857611c18612091565b604051601f8301601f19908116603f01168101908282118183101715611c4057611c40612091565b81604052838152866020858801011115611c5957600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff81168114611be857600080fd5b600060208284031215611c9c57600080fd5b611ca582611bd1565b9392505050565b60008060408385031215611cbf57600080fd5b611cc883611bd1565b9150611cd660208401611bd1565b90509250929050565b60008060408385031215611cf257600080fd5b611cfb83611bd1565b946020939093013593505050565b600060208284031215611d1b57600080fd5b81518015158114611ca557600080fd5b600060208284031215611d3d57600080fd5b5035919050565b60008060008060808587031215611d5a57600080fd5b84359350611d6a60208601611bd1565b925060408501359150611d7f60608601611bd1565b905092959194509250565b600080600080600080600060e0888a031215611da557600080fd5b87359650611db560208901611bd1565b955060408801359450606088013593506080880135925060a08801359150611ddf60c08901611c79565b905092959891949750929550565b60008060008060008060c08789031215611e0657600080fd5b86519550602087015194506040870151935060608701516001600160401b0381168114611e3257600080fd5b60808801519093506001600160e01b031981168114611e5057600080fd5b8092505060a087015190509295509295509295565b600080600080600060a08688031215611e7d57600080fd5b8535945060208601356001600160401b03811115611e9a57600080fd5b611ea688828901611bed565b9450506040860135925060608601359150611ec360808701611c79565b90509295509295909350565b60008060408385031215611ee257600080fd5b82356001600160401b03811115611ef857600080fd5b611f0485828601611bed565b925050611cd660208401611bd1565b60008060008060008060c08789031215611f2c57600080fd5b86356001600160401b03811115611f4257600080fd5b611f4e89828a01611bed565b965050611f5d60208801611bd1565b9450611f6b60408801611bd1565b93506060870135925060808701359150611f8760a08801611c79565b90509295509295509295565b6000825160005b81811015611fb45760208186018101518583015201611f9a565b81811115611fc3576000828501525b509190910192915050565b6020808252601190820152703ab739bab83837b93a32b2103a37b5b2b760791b604082015260600190565b6020808252600e908201526d1cddd85c081b9bdd08199bdd5b9960921b604082015260600190565b600082198211156120345761203461207b565b500190565b60006001600160401b0380831681851680830382111561205b5761205b61207b565b01949350505050565b6000828210156120765761207661207b565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe537761705265717565737428627974657320696e546f6b656e2c75696e7432353620616d6f756e742c75696e7436342065787069726554732c627974657334206f7574436861696e2c6279746573206f7574546f6b656e295377617052656c656173652862797465733332207377617049642c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type MesonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Meson__factory extends ContractFactory {
  constructor(...args: MesonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Meson> {
    return super.deploy(_supportedTokens, overrides || {}) as Promise<Meson>;
  }
  getDeployTransaction(
    _supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_supportedTokens, overrides || {});
  }
  attach(address: string): Meson {
    return super.attach(address) as Meson;
  }
  connect(signer: Signer): Meson__factory {
    return super.connect(signer) as Meson__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonInterface {
    return new utils.Interface(_abi) as MesonInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Meson {
    return new Contract(address, _abi, signerOrProvider) as Meson;
  }
}
