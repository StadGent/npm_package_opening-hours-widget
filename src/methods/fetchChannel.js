import request from '../utils/request'

export default async function channel (serviceId, channelId, options = {}) {
  if (!options.endpoint) {
    options.endpoint = this.endpoint
  }

  let response = await request(`services/${serviceId}/channels/${channelId}`, 'json', options)
  return response.json()
}
