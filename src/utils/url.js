/**
 *
 * @param {Object} parameters
 *  Key-value object containing the parameters
 * @return {string}
 *  The querystring containing the given parameters
 */
export const queryString = parameters => Object.keys(parameters).map(k => `${k}=${encodeURIComponent(parameters[k])}`).join('&')
