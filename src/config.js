let _config = {
  env: 'test'
}

_config.endpoint = (() => {
  if (_config.env === 'test') {
    return 'http://openingsuren.web.test.gentgrp.gent.be/api/v1'
  }

  return 'http://openingsuren.gent.be/api/v1'
})()

export default {
  set: (key, value) => { _config[key] = value },
  get: key => _config[key]
}
