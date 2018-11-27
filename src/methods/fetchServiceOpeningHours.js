import request from '../utils/request'
import merge from '../utils/merge'
import { now } from '../utils/date'
import { queryString } from '../utils/url'

/**
 * Fetch the opening hours for a specific service and/or channel
 *
 * @param {string} serviceId
 *  ID of the service that should be requested from the API
 * @param {Object} [userOptions]
 *  Object of key-value pairs that configure the request.
 * @param {string} userOptions.endpoint
 *  API endpoint
 * @param {string} [format]
 *  Format in which the resources should be returned.
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export default async function fetchServiceOpeningHours (serviceId, userOptions = {}, format = this.options.defaultFormat) {
  const options = merge({
    type: 'day',
    parameters: {
      date: now()
    }
  }, userOptions)

  if (!options.endpoint) {
    options.endpoint = this.options.endpoint
  }

  let response = await request(`services/${serviceId}/openinghours/${options.type}?${queryString(options.parameters)}`, format, options)

  if (format === 'json') {
    return response.json()
  }

  return response.text()
}
