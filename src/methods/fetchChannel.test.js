/* eslint-env jest */

import fetchChannel from './fetchChannel'

jest.mock('../utils/request')

describe('get fetchChannels for a service', () => {
  it('should return an array with fetchChannels', async () => {
    expect.assertions(2)
    const data = await fetchChannel('2690', '2102')
    
    expect(data).toBeInstanceOf(Object)
    expect(data.id).toBe(2102)
  })
})
