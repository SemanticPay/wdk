/**
 * Full list of mutating wallet and protocol methods.
 * Used when a policy does not specify `method`.
 *
 * Includes:
 * - Wallet operations (transfer, approve, sign, etc.)
 * - Bridge operations
 * - Staking / lending operations
 * - Token management
 * - Protocol-specific actions
 */
export const MUTATING_METHODS = [
  // Wallet operations
  'sign', // generic sign
  'signMessage', // sign arbitrary messages
  'sendTransaction', // send tokens / ETH
  'transfer', // transfer tokens
  'approve', // approve ERC20 or assets
  'deposit', // deposit funds
  'withdraw', // withdraw funds

  // Bridge operations
  'bridge', // transfer across chains

  // Staking / protocol operations
  'stake', // stake tokens
  'unstake', // unstake tokens
  'claimRewards', // claim staking rewards
  'borrow', // borrow from lending protocol
  'repay', // repay loan
  'mint', // mint tokens
  'burn', // burn tokens
  'swap', // token swap on DEX

  // Governance / DAO / voting actions
  'vote', // cast votes
  'delegate', // delegate voting power
  'propose', // create proposal

  // NFT / asset operations
  'mintNFT', // mint NFT
  'transferNFT', // transfer NFT
  'burnNFT', // burn NFT
  'approveNFT', // approve NFT transfer

  // Protocol-specific operations
  'liquidate', // liquidation in lending protocol
  'addLiquidity', // add liquidity to pool
  'removeLiquidity', // remove liquidity from pool
  'lock', // lock tokens / assets
  'unlock' // unlock tokens / assets
]
