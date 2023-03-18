import { InitializeChild } from '../generated/schema';
import { Child } from '../generated/templates';
import {Address} from "@graphprotocol/graph-ts"

export function handleChild(CHILD_CONTRACT_ADDRESS : string): void {
  let child = InitializeChild.load(CHILD_CONTRACT_ADDRESS);
  if (child == null) {
    child = new InitializeChild(CHILD_CONTRACT_ADDRESS);
    
    
    Child.create(
      Address.fromString(CHILD_CONTRACT_ADDRESS)
      );
      // child.save();
  }
}