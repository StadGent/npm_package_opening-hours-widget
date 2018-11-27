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
  this.options = Object.assign({
    endpoint: ENDPOINT,
    defaultFormat: 'html'
  }, options)

  if (options.debug) {
    this.options.endpoint = ENDPOINT_TEST
  }
}

OpeningHoursApi.prototype = methods

export default OpeningHoursApi
