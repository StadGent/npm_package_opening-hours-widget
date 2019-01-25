/**
 * @file Manages the configuration
 */

/**
 * @type Object
 * @private
 */
let _config = {
  endpoint: 'https://openingsuren.gent.be/api/v1',
  defaultFormat: 'html'
}

/**
 * Normalize values
 *
 * @param value
 * @private
 */
function _normalize(value) {
  // Remove trailing slash
  if (/^http(s?):\/\//.test(value)) {
    return value.replace(/\/$/, '')
  }
}

/**
 * Set one or multiple values in the config
 *
 * @param {Object|string} key
 *  Key for the given value OR Object with key-value pairs that will each be set in the configuration.
 * @param {string} [value]
 *  Optional value that represents the value that is set in the configuration.
 */
export function setConfig() {
  if(arguments.length === 2) {
    _config[arguments[0]] = _normalize(arguments[1])
  }
  else if(Object.getPrototypeOf(arguments) === Object.prototype) {
    Object.keys(arguments[0]).forEach(key => {
      setConfig(key, arguments[0][key])
    })
  }
}

/**
 * Retrieve a configuration value
 *
 * @param {string} key
 *  Key for which you want a configuration
 * @return {*}
 *  The value of the specified key in the config
 */
export default function getConfig(key) {
  try {
    return _config[key]
  } catch(err) {
    throw new Error(`Config with key '${key}' not found.`)
  }
}
