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
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(2) // 1 day * 2 channels
    })

    it('should return data in JSON format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, false, options, 'json')

      expect(typeof data).toBe('object')
      expect(data).toHaveLength(2)
    })
  })

  describe('for a week from monday to friday', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForWeek(serviceId, false, options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(14) // 7 days * 2 channels
    })

    it('should return data in JSON format', async () => {
      expect.assertions(4)
      const data = await api.fetchOpeningHoursForWeek(serviceId, false, options, 'json')

      expect(data).toBeInstanceOf(Array)
      expect(data).toHaveLength(2)
      Object.keys(data).forEach(key => expect(data[key].openinghours).toHaveLength(7))
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
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(1)
    })

    it('should return data in JSON format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, channelId, options, 'json')

      expect(typeof data).toBe('object')
      expect(data.channelId).toBe(channelId)
    })
  })

  describe('for a week from monday to friday', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForWeek(serviceId, channelId, options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(7) // 7 days * 1 channel
    })

    it('should return data in JSON format', async () => {
      expect.assertions(3)
      const data = await api.fetchOpeningHoursForWeek(serviceId, channelId, options, 'json')

      expect(data).toBeInstanceOf(Object)
      expect(data.channelId).toBe(channelId)
      expect(data.openinghours).toHaveLength(7) // 7 days * 1 channel
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
