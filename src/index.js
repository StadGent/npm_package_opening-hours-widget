/**
 * @file Opening hours wrapper.
 * @author Helena Standaert <helena.standaert@digipolis.gent>
 */
import 'promise-polyfill/src/polyfill'
import { setConfig } from './config'
import methods from './api'
import events from './events'

/**
 * @param {Object} [options]
 *  An object with options that change the behavior of the package
 * @param {string} [options.endpoint]
 *  The API endpoint that is used for all API calls
 * @param {string} [options.endpoint_key]
 *  The API endpoint key that is used for all API calls
 * @class
 */
function OpeningHoursWidget(options = {}) {
  setConfig(options)
}

OpeningHoursWidget.prototype = {
  ...methods,
  ...events
}
export default OpeningHoursWidget
