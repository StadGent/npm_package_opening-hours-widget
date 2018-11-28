/**
 * @file Fetches opening hours for a given channel and/or service
 */
import request from '../utils/request'
import { merge } from '../utils/merge'
import { now } from '../utils/date'
import { queryString } from '../utils/url'

/**
 * Fetch the opening hours for a specific service and/or channel
 *
 * @param {string} serviceId
 *  ID of the service that should be requested from the API.
 * @param {string} [channelId=false]
 *  ID of the channel that should be requested from the API.
 * @param {Object} [userOptions]
 *  Options passed in to the fetch API.
 *  See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters for all available options.
 * @param {string} [userOptions.type]
 *  Type of widget that is returned. This is only relevant when the format is `html`.
 * @param {string} [userOptions.parameters]
 *  Object with key-value pairs that are added to the API call as GET parameters.
 * @param {string} [format]
 *  Format in which the resources should be returned.
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export async function fetchOpeningHours (serviceId, channelId = false, userOptions = {}, format = 'html') {
  /** @type string */
  let uri = `services/${serviceId}/`

  /** @type Object */
  const options = merge({
    type: 'day',
    parameters: {
      date: now()
    }
  }, userOptions)

  if (channelId) {
    uri += `channels/${channelId}/`
  }

  if (options.type && !['day', 'week', 'month', 'year'].includes(options.type)) {
    throw new TypeError('Opening Hours \'type\' option should be one of: \'day\', \'week\', \'month\', \'year\'')
  }

  uri += `openinghours/${options.type}?${queryString(options.parameters)}`

  /** @type Response */
  let response = await request(uri, format, options)

  if (format === 'json') {
    return response.json()
  }
  
  return response.text()
}

/**
 * Fetch the opening hours for a specific service and/or channel
 *
 * @param {string} serviceId
 *  ID of the service that should be requested from the API.
 * @param {string} [channelId=false]
 *  ID of the channel that should be requested from the API.
 * @param {Object} [userOptions]
 *  Options passed in to the fetch API.
 *  See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters for all available options.
 * @param {string} [userOptions.type]
 *  Type of widget that is returned. This is only relevant when the format is `html`.
 * @param {string} [userOptions.parameters]
 *  Object with key-value pairs that are added to the API call as GET parameters.
 * @param {string} [format]
 *  Format in which the resources should be returned.
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export async function fetchOpeningHoursForDate() {
  return await fetchOpeningHours(...arguments)
}

export default {
  fetchOpeningHours,
  fetchOpeningHoursForDate
}
