import utils from '../utils'

const {request} = utils

export default async function channels (serviceId) {
  let response = await request(`services/${serviceId}/channels`)
  return response.json()
}
