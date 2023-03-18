import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { ChildGeneration } from "../generated/Factory/Factory"

export function createChildGenerationEvent(
  _parentAddress: Address,
  _childAddress: Address,
  childNumber: BigInt
): ChildGeneration {
  let childGenerationEvent = changetype<ChildGeneration>(newMockEvent())

  childGenerationEvent.parameters = new Array()

  childGenerationEvent.parameters.push(
    new ethereum.EventParam(
      "_parentAddress",
      ethereum.Value.fromAddress(_parentAddress)
    )
  )
  childGenerationEvent.parameters.push(
    new ethereum.EventParam(
      "_childAddress",
      ethereum.Value.fromAddress(_childAddress)
    )
  )
  childGenerationEvent.parameters.push(
    new ethereum.EventParam(
      "childNumber",
      ethereum.Value.fromUnsignedBigInt(childNumber)
    )
  )

  return childGenerationEvent
}
