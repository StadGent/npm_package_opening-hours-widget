import request from '../utils/request'

export default async function channels (serviceId, format = 'json', options = {}) {
  if (!options.endpoint) {
    options.endpoint = this.endpoint
  }

  let response = await request(`services/${serviceId}/channels`, format, options)
  return response.json()
}
