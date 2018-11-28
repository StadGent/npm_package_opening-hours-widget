/* eslint-env jest */

import api from './fetchOpeningHours'
jest.mock('../utils/request')

const serviceId = 2690,
  channelId = 2102,
  options = {
    endpoint: 'http://openingsuren.web.test.gentgrp.gent.be/api/v1'
  },
  parser = new DOMParser()

describe('should fetch openinghours for a service', () => {
  describe('for a specified date', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, false, options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours').length).toBe(2)
    })

    it('should return data in JSON format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, false, options, 'json')

      expect(typeof data).toBe('object')
      expect(data.length).toBe(2)
    })
  })
})

describe('should fetch openinghours for a channel', () => {
  describe('for a specified date', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, channelId, options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours').length).toBe(1)
    })

    it('should return data in JSON format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, channelId, options, 'json')

      expect(typeof data).toBe('object')
      expect(data.channelId).toBe(channelId)
    })
  })
})

describe('should handle errors properly', () => {
  it('should throw an error when service doesn\'t exist', async () => {
    expect.assertions(1)
    await api.fetchOpeningHours(0, false, options)
      .catch(err => {
        expect(err.toString()).toMatch(/Error: Unprocessable Entity/)
      })
  })
})
