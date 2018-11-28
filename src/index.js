/**
 * @file Opening hours API wrapper.
 * @author Helena Standaert <helena.standaert@digipolis.gent>
 */
import 'promise-polyfill/src/polyfill'
import { setConfig } from './config'
import methods from './methods'

/**
 * @param {Object} [options]
 *  An object with options that change the behavior of the package
 * @param {string} [options.endpoint]
 *  The API endpoint that is used for all API calls
 * @constructor
 */
function OpeningHoursApi(options = {}) {
  setConfig(options)
}

OpeningHoursApi.prototype = methods
export default OpeningHoursApi
