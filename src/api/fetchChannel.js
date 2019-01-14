/**
 * @file Fetches channel information by a service and channel ID
 */
import request from '../utils/request'

/**
 * Fetch the opening hours for a specific service and/or channel
 *
 * @example
 * api.fetchChannel(999, 12).then(console.log) // logs response to the console
 * @param {string} serviceId
 *  ID of the service that should be requested from the API
 * @param {Object} options
 *    Options passed in to the fetch API.
 *    See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters for all available options.
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export default async function fetchChannel (serviceId, channelId, options = {}) {
  let response = await request(`services/${serviceId}/channels/${channelId}`, 'json', options)
  return response.json()
}
