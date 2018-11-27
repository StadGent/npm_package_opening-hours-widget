import request from '../utils/request'
/**
 * Fetch the opening hours for a specific service and/or channel
 *
 * @param {string} serviceId
 *  ID of the service that should be requested from the API
 * @param {Object} [options]
 *  Object of key-value pairs that configure the request.
 * @param {string} options.endpoint
 *  API endpoint
 * @returns {Promise<*|Promise<*>|Promise<any>>}
 */
export default async function channels (serviceId, options = {}) {
  if (!options.endpoint) {
    options.endpoint = this.endpoint
  }

  let response = await request(`services/${serviceId}/channels`, 'json', options)
  return response.json()
}
