/**
 * @file Utility function that sends a request to the opening hours API
 */
import {fetch, Headers} from 'whatwg-fetch'
import config from '../config'

/**
 *
 * @param uri
 *  Unprefixed uri to which the request should be done
 * @param {String} format
 *  Format in which the data should be returned. Either 'html' or 'json'.
 * @param {Object} options
 *  Options passed in to the fetch API.
 *  See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters for all available options.
 * @returns {Promise<boolean>}
 */
async function request(uri, format, options = {}) {
  const _defaults = {
    headers: new Headers()
  }

  options = Object.assign({}, _defaults, options) // apply defaults to the given options

  if(format === 'json') {
    options.headers.set('Accept', 'application/json')
  }

  if(format === 'html') {
    options.headers.set('Accept', 'text/html')
  }

  if (config('endpoint_key')) {
    options.headers.set('user-key', config('endpoint_key'));
  }

  return await fetch(`${options.endpoint || config('endpoint')}/${uri}`, options)
    .then(function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        let error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })
}

export default request
