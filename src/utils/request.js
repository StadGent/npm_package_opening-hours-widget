import config from '../config'
import {fetch, Headers} from 'whatwg-fetch'

/**
 *
 * @param uri
 *    Unprefixed uri to which the request should be done
 * @param {String} format
 *    Format in which the data should be returned. Either 'html' or 'json'.
 * @param {Object} options
 *    Options passed in to the fetchAPI.
 * @returns {Promise<boolean>}
 */
export default async function request(uri, format, options = {}) {
  const _defaults = {
    headers: new Headers()
  }

  options = Object.assign({}, _defaults, options) // apply defaults to the given options

  if(format === 'json') {
    options.headers.set('Accept', 'application/json')
  }

  return await fetch(`${config.get('endpoint')}/${uri}`, options)
}
