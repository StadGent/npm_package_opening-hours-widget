/* eslint-env jest */

import fetchServiceOpeningHours from './fetchServiceOpeningHours'
jest.mock('../utils/request')


describe('get fetchChannels for a service', () => {
  it('should return an HTML string', async () => {
    expect.assertions(1)
    const data = await fetchServiceOpeningHours('2690')

    expect(typeof data).toBe('string')
  })

  it('should return an JSON object', async () => {
    expect.assertions(1)
    const data = await fetchServiceOpeningHours('2690', {})

    expect(typeof data).toBe('string')
  })
})
