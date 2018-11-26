/* eslint-env jest */

import channel from './channel'

jest.mock('../utils/request')

describe('get channels for a service', () => {
  it('should return an array with channels', async () => {
    expect.assertions(2)
    const data = await channel('2690', '2102')
    
    expect(data).toBeInstanceOf(Object)
    expect(data.id).toBe(2102)
  })
})
