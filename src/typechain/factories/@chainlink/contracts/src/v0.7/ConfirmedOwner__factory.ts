/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConfirmedOwner,
  ConfirmedOwnerInterface,
} from "../../../../../@chainlink/contracts/src/v0.7/ConfirmedOwner";

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
  "0x608060405234801561001057600080fd5b506040516104343803806104348339818101604052602081101561003357600080fd5b50518060006001600160a01b038216610093576040805162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b03848116919091179091558116156100c3576100c3816100cb565b50505061017a565b6001600160a01b038116331415610129576040805162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6102ab806101896000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806379ba5097146100465780638da5cb5b14610050578063f2fde38b14610074575b600080fd5b61004e61009a565b005b610058610149565b604080516001600160a01b039092168252519081900360200190f35b61004e6004803603602081101561008a57600080fd5b50356001600160a01b0316610158565b6001546001600160a01b031633146100f2576040805162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b604482015290519081900360640190fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6000546001600160a01b031690565b61016061016c565b610169816101c6565b50565b6000546001600160a01b031633146101c4576040805162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b604482015290519081900360640190fd5b565b6001600160a01b038116331415610224576040805162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a35056fea2646970667358221220c6e454cf3f7527e2834a0df3606e6359c7f716625ca5b97de7bf26e0eafc6c3b64736f6c63430007050033";

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
