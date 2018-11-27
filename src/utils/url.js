/**
 * Transform an object of key-value pairs to a valid querystring
 *
 * @param {Object} parameters
 *  Key-value object containing the parameters
 * @return {string}
 *  The querystring containing the given parameters
 */
export function queryString(parameters) {
  return Object.keys(parameters)
    .map(k => `${k}=${encodeURIComponent(parameters[k])}`)
    .join('&')
}
