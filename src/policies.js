import { PolicyViolationError } from './errors/PolicyViolationError.js'

/**
 * Runs policies sequentially.
 *
 * @param {Array} policies
 * @param {string} method
 * @param {any} params
 * @param {any} target
 */
export async function runPolicies (policies, method, params, target) {
  for (const policy of policies) {
    const result = await policy.evaluate({ method, params, target })

    if (!result) {
      throw new PolicyViolationError(policy.name, method, target)
    }
  }
}
