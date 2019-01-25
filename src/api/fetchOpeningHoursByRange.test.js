/* eslint-env jest */

import fetchOpeningHoursByRange from './fetchOpeningHoursByRange'

jest.mock('../utils/request')

const serviceId = 2690,
  channelId = 2102,
  options = {
    endpoint: 'https://openingsuren.web.test.gentgrp.gent.be/api/v1'
  },
  parser = new DOMParser(),
  rangeSize = 7

describe('fetch the opening hours for a given range', () => {
  describe('for a service', () => {
    it('should succeed with valid date strings', async () => {
      let from = '18-11-14'
      let until = '18-11-20'

      let data = await fetchOpeningHoursByRange(
        from,
        until,
        serviceId,
        false,
        'html',
        options
      )
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(rangeSize * 2) // X days * 2 channels
    })

    it('should succeed with valid dates', async () => {
      let from = new Date()
      let until = new Date()
      until.setDate(until.getDate() + (rangeSize - 1))
      let data = await fetchOpeningHoursByRange(
        from,
        until,
        serviceId,
        false,
        'html',
        options
      )
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(rangeSize * 2) // X days * 2 channels
    })

    it('should be able to return json data', async () => {
      let from = '18-11-14'
      let until = '18-11-20'

      let data = await fetchOpeningHoursByRange(
        from,
        until,
        serviceId,
        false,
        'json',
        options
      )

      expect(data).toBeInstanceOf(Array)
      expect(data).toHaveLength(2) // 2 channels
    })
  })

  describe('for a channel', () => {
    it('should succeed with valid date strings', async () => {
      let from = '18-11-14'
      let until = '18-11-20'

      let data = await fetchOpeningHoursByRange(
        from,
        until,
        serviceId,
        channelId,
        'html',
        options
      )
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(rangeSize) // X days
    })

    it('should succeed with valid dates', async () => {
      let from = new Date()
      let until = new Date()
      until.setDate(until.getDate() + (rangeSize - 1))
      let data = await fetchOpeningHoursByRange(
        from,
        until,
        serviceId,
        channelId,
        'html',
        options
      )
      let parsed = parser.parseFromString(data, 'text/html')

      expect(typeof data).toBe('string')
      expect(parsed.querySelectorAll('.openinghours--details')).toHaveLength(rangeSize) // X days * 2 channels
    })

    it('should be able to return json data', async () => {
      let from = '18-11-14'
      let until = '18-11-20'

      let data = await fetchOpeningHoursByRange(
        from,
        until,
        serviceId,
        channelId,
        'json',
        options
      )

      expect(data).toBeInstanceOf(Object)
      expect(data.openinghours).toHaveLength(rangeSize) // 2 channels
    })
  })
})
