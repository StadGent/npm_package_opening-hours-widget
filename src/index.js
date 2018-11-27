/**
 * @file
 * Opening hours API wrapper.
 */

import 'promise-polyfill/src/polyfill'

import methods from './methods'
import {ENDPOINT, ENDPOINT_TEST} from './constants'

/**
 * @constructor
 */
function OpeningHoursApi(options = {}) {
  this.endpoint = options.debug ? ENDPOINT_TEST : ENDPOINT
}

OpeningHoursApi.prototype = methods

export default OpeningHoursApi
