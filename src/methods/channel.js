import request from '../utils/request'

export default async function channel (serviceId, channelId, format = 'json', options = {}) {
  let response = await request(`services/${serviceId}/channels/${channelId}`, format, options)
  return response.json()
}
