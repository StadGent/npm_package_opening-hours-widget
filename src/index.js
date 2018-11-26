/**
 * @file
 * Opening hours API wrapper.
 */

import 'promise-polyfill/src/polyfill'

import methods from './methods'
import config from './config'

/**
 * @constructor
 */
function OpeningHoursApi(options = {}) {
  Object.keys(options).forEach(key => {
    config.set(key, options[key])
  })
  return this
}

OpeningHoursApi.prototype = methods
window.OpeningHoursApi = OpeningHoursApi

