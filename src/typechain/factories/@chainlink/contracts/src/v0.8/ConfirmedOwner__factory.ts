/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConfirmedOwner,
  ConfirmedOwnerInterface,
} from "../../../../../@chainlink/contracts/src/v0.8/ConfirmedOwner";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161054138038061054183398101604081905261002f91610147565b8060006001600160a01b0382166100615760405162461bcd60e51b8152600401610058906101a7565b60405180910390fd5b600080546001600160a01b0319166001600160a01b03848116919091179091558116156100915761009181610099565b5050506101fb565b336001600160a01b038216036100c15760405162461bcd60e51b8152600401610058906101eb565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60006001600160a01b0382165b92915050565b61012e81610112565b811461013957600080fd5b50565b805161011f81610125565b60006020828403121561015c5761015c600080fd5b6000610168848461013c565b949350505050565b601881526000602082017f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000815291505b5060200190565b6020808252810161011f81610170565b601781526000602082017f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000815291506101a0565b6020808252810161011f816101b7565b6103378061020a6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806379ba5097146100465780638da5cb5b14610050578063f2fde38b14610072575b600080fd5b61004e610085565b005b6000546001600160a01b031660405161006991906101ea565b60405180910390f35b61004e610080366004610217565b61010f565b6001546001600160a01b031633146100b85760405162461bcd60e51b81526004016100af90610270565b60405180910390fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610117610123565b6101208161014f565b50565b6000546001600160a01b0316331461014d5760405162461bcd60e51b81526004016100af906102ad565b565b336001600160a01b038216036101775760405162461bcd60e51b81526004016100af906102f1565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60006001600160a01b0382165b92915050565b6101e4816101c8565b82525050565b602081016101d582846101db565b610201816101c8565b811461012057600080fd5b80356101d5816101f8565b60006020828403121561022c5761022c600080fd5b6000610238848461020c565b949350505050565b601681526000602082017526bab9ba10313290383937b837b9b2b21037bbb732b960511b815291505b5060200190565b602080825281016101d581610240565b601681526000602082017527b7363c9031b0b63630b1363290313c9037bbb732b960511b81529150610269565b602080825281016101d581610280565b601781526000602082017f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000081529150610269565b602080825281016101d5816102bd56fea26469706673582212201f1e9ee5b8538847b1aa62c608a1702fcf636c38a5aac72d34d4ccd0f6267d2964736f6c63430008120033";

type ConfirmedOwnerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConfirmedOwnerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConfirmedOwner__factory extends ContractFactory {
  constructor(...args: ConfirmedOwnerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConfirmedOwner> {
    return super.deploy(newOwner, overrides || {}) as Promise<ConfirmedOwner>;
  }
  override getDeployTransaction(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(newOwner, overrides || {});
  }
  override attach(address: string): ConfirmedOwner {
    return super.attach(address) as ConfirmedOwner;
  }
  override connect(signer: Signer): ConfirmedOwner__factory {
    return super.connect(signer) as ConfirmedOwner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfirmedOwnerInterface {
    return new utils.Interface(_abi) as ConfirmedOwnerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConfirmedOwner {
    return new Contract(address, _abi, signerOrProvider) as ConfirmedOwner;
  }
}
