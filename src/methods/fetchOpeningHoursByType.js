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
 * @param {string} type
 *  Type of widget you want to have returned. One of `day`, `week`, `month` or `year`
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
 * @private
 */
export async function fetchOpeningHoursByType (type, serviceId, channelId = false, format = 'html', userOptions = {}) {
  /** @type string */
  let uri = `services/${serviceId}/`
  
  /** @type Object */
  const options = merge({
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

  uri += `openinghours/${type}?${queryString(options.parameters)}`

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
 * @param {string} [format]
 *  Format in which the resources should be returned.
 * @param {Object} [userOptions]
 *  Options passed in to the fetch API.
 *  See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters for all available options.
 * @param {string} [userOptions.parameters]
 *  Object with key-value pairs that are added to the API call as GET parameters.
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export async function fetchOpeningHoursForDate() {
  return await fetchOpeningHoursByType('day', ...arguments)
}

/**
 * Fetch the opening hours for a week from Monday to Sunday
 *
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
export async function fetchOpeningHoursForWeek() {
  return await fetchOpeningHoursByType('week', ...arguments)
}

/**
 * Fetch the opening hours for a month
 *
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
export async function fetchOpeningHoursForMonth() {
  return await fetchOpeningHoursByType('month', ...arguments)
}

/**
 * Fetch the opening hours for a year
 *
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
export async function fetchOpeningHoursForYear() {
  return await fetchOpeningHoursByType('year', ...arguments)
}

export default {
  fetchOpeningHoursForDate,
  fetchOpeningHoursForWeek,
  fetchOpeningHoursForMonth,
  fetchOpeningHoursForYear
}
