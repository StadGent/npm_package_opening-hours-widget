/**
 * @file Utility functions for modification of JS date objects
 */

import '../polyfills/object-assign'

/**
 * Merge a `source` object to a `target` recursively
 *
 * @param {Object} target
 *  The target object in which properties get merged.
 * @param source
 *  The source object of which properties get merged into the target object.
 * @returns {*}
 */
export function merge (target, source) {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}
