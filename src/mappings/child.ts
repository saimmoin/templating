import { InitializeChild } from "../../generated/schema";
import { Deposit as DepositEvent, Withdraw as WithdrawEvent, InitializeChild as InitializeChildEvent } from "./../../generated/templates/Child/Child";
import { Deposit as DepositEntity, Withdraw as WithdrawEntity } from "./../../generated/schema";

export function handleInitializeChild(event: InitializeChildEvent): void {
  let entity = InitializeChild.load(event.params.childAddress.toHexString());
  if (entity == null) {
    entity = new InitializeChild(event.params.childAddress.toHexString());
  }
  entity.parentAddress = event.params._parentAddress;
  entity.childAddress = event.params.childAddress;
  entity.blockTimestamp = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleDeposit(event: DepositEvent): void {
	let entity = DepositEntity.load(event.transaction.hash.toHexString());
	if (entity == null) {
		entity = new DepositEntity(event.transaction.hash.toHexString());
	}
	entity.user = event.params.user;
	entity.value = event.params.value;
	entity.blockNumber = event.block.number;
	entity.timestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;
	entity.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = WithdrawEntity.load(event.transaction.hash.toHexString());
  if (entity == null) {
    entity = new WithdrawEntity(event.transaction.hash.toHexString());
  }
  entity.user = event.params.user;
  entity.value = event.params.value;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}