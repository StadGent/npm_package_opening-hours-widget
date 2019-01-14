/**
 * @file Fetches all channels for a given service
 */
import request from '../utils/request'

/**
 * Fetch the opening hours for a specific service and/or channel
 *
 * @param {string} serviceId
 *  ID of the service that should be requested from the API
 * @example
 * api.fetchChannels(999).then(console.log) // logs response to the console
 * @param {Object} options
 *    Options passed in to the fetch API.
 *    See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters for all available options.
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export default async function channels (serviceId, options = {}) {
  let response = await request(`services/${serviceId}/channels`, 'json', options)
  return response.json()
}
