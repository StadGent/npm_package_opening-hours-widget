import request from '../utils/request'

export default async function channel (serviceId, channelId, options = {}) {
  let response = await request(`services/${serviceId}/channels/${channelId}`, 'json', options)
  return response.json()
}
