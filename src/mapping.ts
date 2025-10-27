import { Swap, Mint, Burn } from "../generated/schema"
import {
  Swap as SwapEvent,
  Mint as MintEvent,
  Burn as BurnEvent
} from "../generated/UniswapV3Pool/UniswapV3Pool"

export function handleSwap(event: SwapEvent): void {
  let swap = new Swap(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  swap.sender = event.params.sender
  swap.recipient = event.params.recipient
  swap.amount0 = event.params.amount0
  swap.amount1 = event.params.amount1
  swap.sqrtPriceX96 = event.params.sqrtPriceX96
  swap.liquidity = event.params.liquidity
  swap.tick = event.params.tick
  swap.timestamp = event.block.timestamp
  swap.save()
}

export function handleMint(event: MintEvent): void {
  let mint = new Mint(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  mint.owner = event.params.owner
  mint.tickLower = event.params.tickLower
  mint.tickUpper = event.params.tickUpper
  mint.amount = event.params.amount
  mint.amount0 = event.params.amount0
  mint.amount1 = event.params.amount1
  mint.timestamp = event.block.timestamp
  mint.save()
}

export function handleBurn(event: BurnEvent): void {
  let burn = new Burn(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  burn.owner = event.params.owner
  burn.tickLower = event.params.tickLower
  burn.tickUpper = event.params.tickUpper
  burn.amount = event.params.amount
  burn.amount0 = event.params.amount0
  burn.amount1 = event.params.amount1
  burn.timestamp = event.block.timestamp
  burn.save()
}
