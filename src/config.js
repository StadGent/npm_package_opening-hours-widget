/* global ENVIRONMENT */
import {ENDPOINT, ENDPOINT_TEST} from './constants'

let _config = {
  endpoint: ENVIRONMENT === 'production' ? ENDPOINT : ENDPOINT_TEST,
  defaultFormat: 'html'
}

export function setConfig() {
  if(arguments.length === 2) {
    _config[arguments[0]] = arguments[1]
  }
  else if(Object.getPrototypeOf(arguments) === Object.prototype) {
    Object.keys(arguments[0]).forEach(key => {
      setConfig(key, arguments[0][key])
    })
  }
}

export default function getConfig(key) {
  try {
    return _config[key]
  } catch(err) {
    throw new Error(`Config with key '${key}' not found.`)
  }
}
