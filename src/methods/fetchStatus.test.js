/* eslint-env jest */

import fetchStatus from './fetchStatus'

jest.mock('../utils/request')

const serviceId = 2690,
  channelId = 2102,
  options = {
    endpoint: 'http://openingsuren.web.test.gentgrp.gent.be/api/v1'
  }

describe('fetch the status', () => {
  describe('for a service', () => {
    it('should return them in html format', async () => {
      let data = await fetchStatus(serviceId, false, 'html', options)

      expect(typeof data).toBe('string')
      expect(data).toMatch(/open/)
    })

    it('should return them in json format', async () => {
      let data = await fetchStatus(serviceId, false, 'json', options)

      expect(data).toBeInstanceOf(Array)
      expect(data).toHaveLength(2)
      data.forEach(channel => {
        expect(channel.openNow).toBeDefined()
      })
    })
  })

  describe('for a channel', () => {
    it('should return them in html format', async () => {
      let data = await fetchStatus(serviceId, channelId, 'html', options)

      expect(typeof data).toBe('string')
      expect(data).toMatch(/open/)
    })

    it('should return them in json format', async () => {
      let data = await fetchStatus(serviceId, channelId, 'json', options)

      expect(data).toBeInstanceOf(Object)
      expect(data.openNow).toBeDefined()
    })
  })
})
