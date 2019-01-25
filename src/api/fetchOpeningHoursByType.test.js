/* eslint-env jest */

import api from './fetchOpeningHoursByType'
jest.mock('../utils/request')

const serviceId = 2690,
  channelId = 2102,
  options = {
    endpoint: 'https://openingsuren.web.test.gentgrp.gent.be/api/v1'
  },
  parser = new DOMParser()

describe('should fetch openinghours for a service', () => {
  describe('for a specified date', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, false, 'html', options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(2) // 1 day * 2 channels
    })

    it('should return data in JSON format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, false, 'json', options)

      expect(typeof data).toBe('object')
      expect(data).toHaveLength(2)
    })
  })

  describe('for a week from monday to friday', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForWeek(serviceId, false, 'html', options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(14) // 7 days * 2 channels
    })

    it('should return data in JSON format', async () => {
      expect.assertions(4)
      const data = await api.fetchOpeningHoursForWeek(serviceId, false, 'json', options)

      expect(data).toBeInstanceOf(Array)
      expect(data).toHaveLength(2)
      Object.keys(data).forEach(key => expect(data[key].openinghours).toHaveLength(7))
    })
  })

  describe('for a month', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForMonth(serviceId, false, 'html', options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(60) // 30 days * 2 channels
    })

    it('should return data in JSON format', async () => {
      expect.assertions(4)
      const data = await api.fetchOpeningHoursForMonth(serviceId, false, 'json', options)

      expect(data).toBeInstanceOf(Array)
      expect(data).toHaveLength(2)
      Object.keys(data).forEach(key => expect(data[key].openinghours).toHaveLength(30))
    })
  })
})

describe('should fetch openinghours for a channel', () => {
  describe('for a specified date', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, channelId, 'html', options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(1)
    })

    it('should return data in JSON format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForDate(serviceId, channelId, 'json', options)

      expect(typeof data).toBe('object')
      expect(data.channelId).toBe(channelId)
    })
  })

  describe('for a week from monday to friday', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForWeek(serviceId, channelId, 'html', options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(7) // 7 days * 1 channel
    })

    it('should return data in JSON format', async () => {
      expect.assertions(3)
      const data = await api.fetchOpeningHoursForWeek(serviceId, channelId, 'json', options)

      expect(data).toBeInstanceOf(Object)
      expect(data.channelId).toBe(channelId)
      expect(data.openinghours).toHaveLength(7) // 7 days * 1 channel
    })
  })

  describe('for a month', () => {
    it('should return data in HTML format', async () => {
      expect.assertions(2)
      const data = await api.fetchOpeningHoursForMonth(serviceId, channelId, 'html', options)
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(30) // 30 days * 1 channel
    })

    it('should return data in JSON format', async () => {
      expect.assertions(3)
      const data = await api.fetchOpeningHoursForMonth(serviceId, channelId, 'json', options)

      expect(data).toBeInstanceOf(Object)
      expect(data.channelId).toBe(channelId)
      expect(data.openinghours).toHaveLength(30) // 30 days * 1 channel
    })
  })
})

describe('should handle errors properly', () => {
  it('should throw an error when service doesn\'t exist', async () => {
    expect.assertions(1)
    await api.fetchOpeningHoursForDate(0, false, 'html', options)
      .catch(err => {
        expect(err.toString()).toMatch(/Error: Unprocessable Entity/)
      })
  })
})
