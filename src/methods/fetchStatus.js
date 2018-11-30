/**
 * @file Fetches the status of a given channel and/or service
 */
import request from '../utils/request'

/**
 * Fetch the opening hours for a specific service and/or channel
 *
 * @param {string} serviceId
 *  ID of the service that should be requested from the API.
 * @param {string} [channelId=false]
 *  ID of the channel that should be requested from the API.
 * @param {string} [format]
 *  Format in which the resources should be returned.
 * @param {Object} [options]
 *  Options passed in to the fetch API.
 *  See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters for all available options.
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export default async function fetchStatus (serviceId, channelId = false, format = 'html', options = {}) {
  /** @type string */
  let uri = `services/${serviceId}/`

  if (channelId) {
    uri += `channels/${channelId}/`
  }

  uri += 'open-now'

  /** @type Response */
  let response = await request(uri, format, options)

  if (format === 'json') {
    return response.json()
  }

  return response.text()
}
