/* eslint-env jest */

import fetchChannels from './fetchChannels'

jest.mock('../utils/request')

describe('get fetchChannels for a service', () => {
  it('should return an array with fetchChannels', async () => {
    expect.assertions(2)
    const data = await fetchChannels('2690')
    
    expect(data).toBeInstanceOf(Array)
    expect(data.length).toBe(2)
  })
})
