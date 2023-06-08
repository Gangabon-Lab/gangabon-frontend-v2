/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface AuthorizedReceiverInterface extends utils.Interface {
  functions: {
    "getAuthorizedSenders()": FunctionFragment;
    "isAuthorizedSender(address)": FunctionFragment;
    "setAuthorizedSenders(address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAuthorizedSenders"
      | "isAuthorizedSender"
      | "setAuthorizedSenders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAuthorizedSenders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorizedSender",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizedSenders",
    values: [PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAuthorizedSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorizedSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizedSenders",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizedSendersChanged(address[],address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizedSendersChanged"): EventFragment;
}

export interface AuthorizedSendersChangedEventObject {
  senders: string[];
  changedBy: string;
}
export type AuthorizedSendersChangedEvent = TypedEvent<
  [string[], string],
  AuthorizedSendersChangedEventObject
>;

export type AuthorizedSendersChangedEventFilter =
  TypedEventFilter<AuthorizedSendersChangedEvent>;

export interface AuthorizedReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuthorizedReceiverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAuthorizedSenders(overrides?: CallOverrides): Promise<[string[]]>;

    isAuthorizedSender(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getAuthorizedSenders(overrides?: CallOverrides): Promise<string[]>;

  isAuthorizedSender(
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setAuthorizedSenders(
    senders: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAuthorizedSenders(overrides?: CallOverrides): Promise<string[]>;

    isAuthorizedSender(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorizedSendersChanged(address[],address)"(
      senders?: null,
      changedBy?: null
    ): AuthorizedSendersChangedEventFilter;
    AuthorizedSendersChanged(
      senders?: null,
      changedBy?: null
    ): AuthorizedSendersChangedEventFilter;
  };

  estimateGas: {
    getAuthorizedSenders(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorizedSender(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAuthorizedSenders(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAuthorizedSender(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
