import config from '../config'

/**
 *
 * @param uri
 * @returns {Promise<boolean>}
 */
export default async function request(uri) {
  let response = await fetch(`${config.get('endpoint')}/${uri}`)
  console.log(response); // eslint-disable-line
  return true
}
