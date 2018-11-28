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
export default async function fetchServiceOpeningHours (serviceId, userOptions = {}, format = 'html') {
  const options = merge({
    type: 'day',
    parameters: {
      date: now()
    }
  }, userOptions)

  if (options.type && !['day', 'month', 'year', ''].includes(options.type)) {

  }

  /** @type Response */
  let response = await request(`services/${serviceId}/openinghours/${options.type}?${queryString(options.parameters)}`, format, options)

  if (format === 'json') {
    return response.json()
  }

  return response.text()
}
