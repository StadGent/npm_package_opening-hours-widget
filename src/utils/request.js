import {fetch, Headers} from 'whatwg-fetch'
import {ENDPOINT} from '../constants'

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
async function request(uri, format, options = {}) {
  const _defaults = {
    endpoint: ENDPOINT,
    headers: new Headers()
  }

  options = Object.assign({}, _defaults, options) // apply defaults to the given options

  if(format === 'json') {
    options.headers.set('Accept', 'application/json')
  }

  if(format === 'html') {
    options.headers.set('Accept', 'text/html')
  }

  return await fetch(`${options.endpoint}/${uri}`, options)
}

export default request
