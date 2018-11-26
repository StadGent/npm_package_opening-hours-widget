import request from '../utils/request'

export default async function channels (serviceId, format = 'json', options = {}) {
  let response = await request(`services/${serviceId}/channels`, format, options)
  return response.json()
}
