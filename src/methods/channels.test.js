/* eslint-env jest */

import channels from './channels'

jest.mock('../utils/request')

describe('get channels for a service', () => {
  it('should return an array with channels', async () => {
    // expect.assertions(2)
    const data = await channels('2690')
    
    expect(data).toBeInstanceOf(Array)
    expect(data.length).toBe(2)
  })
})
