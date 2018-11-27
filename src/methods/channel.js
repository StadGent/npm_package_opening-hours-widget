import request from '../utils/request'

export default async function channel (serviceId, channelId, format = 'json', options = {}) {
  if (!options.endpoint) {
    options.endpoint = this.endpoint
  }

  let response = await request(`services/${serviceId}/channels/${channelId}`, format, options)
  return response.json()
}
