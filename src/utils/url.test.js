/* eslint-env jest */

import { queryString } from './url'

let params = {
  a: 1,
  b: 2,
  c: 3
}

describe('Create a querystring', () => {
  it('should convert an object to a string', () => {
    let querystring = queryString(params)
    expect(typeof querystring).toBe('string')
  })

  it('should be a valid querystring', () => {
    let querystring = queryString(params)
    expect(querystring).toBe('a=1&b=2&c=3')
  })

  it('should encode special characters', () => {
    let querystring = queryString({
      a: '&çè!'
    })

    expect(querystring).toBe('a=%26%C3%A7%C3%A8!')
  })
})
