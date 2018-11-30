/**
 * @file Fetches opening hours for a given channel and/or service
 */
import request from '../utils/request'
import { merge } from '../utils/merge'
import { formatDate } from '../utils/date'
import { queryString } from '../utils/url'

/**
 * Fetch the opening hours for a specific service and/or channel based on a specified range
 *
 * @param {string|Date} from
 *  Start date for the range for which opening hours should be retrieved
 * @param {string|Date} until
 *  End date for the range for which opening hours should be retrieved
 * @param {string} serviceId
 *  ID of the service that should be requested from the API.
 * @param {string} [channelId=false]
 *  ID of the channel that should be requested from the API.
 * @param {string} [format]
 *  Format in which the resources should be returned.
 * @param {Object} [userOptions]
 *  Options passed in to the fetch API.
 *  See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters for all available options.
 * @param {string} [userOptions.parameters]
 *  Object with key-value pairs that are added to the API call as GET parameters.
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export default async function fetchOpeningHoursByRange (from, until, serviceId, channelId = false, format = 'html', userOptions = {}) {
  /** @type string */
  let uri = `services/${serviceId}/`

  /** @type Object */
  const options = merge({
    parameters: {
      from: from instanceof Date ? formatDate(from) : from,
      until: from instanceof Date ? formatDate(until) : until
    }
  }, userOptions)

  if (channelId) {
    uri += `channels/${channelId}/`
  }

  uri += `openinghours?${queryString(options.parameters)}`

  /** @type Response */
  let response = await request(uri, format, options)

  if (format === 'json') {
    return response.json()
  }
  
  return response.text()
}
