/**
 * @file
 * Opening hours API wrapper.
 */

import 'promise-polyfill/src/polyfill'
import { setConfig } from './config'
import methods from './methods'

/**
 * @constructor
 */
function OpeningHoursApi(options = {}) {
  setConfig(options)
}

OpeningHoursApi.prototype = methods

export default OpeningHoursApi
