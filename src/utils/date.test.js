/* eslint-env jest */
import { formatDate, now } from './date'

describe('Get the current date', () => {
  it('could be formatted', () => {
    let date = now().split('-')

    expect(date.length).toBe(3)
    date.forEach(part => expect(part.length).toBe(2))
  })

  it('could be a JS Date', () => {
    let date = now(false)

    expect(date).toBeInstanceOf(Date)
  })
})

describe('Format a date', () => {
  it('should throw an error when no valid date is passed', () => {
    expect(formatDate).toThrow()
    expect(formatDate).toThrow(TypeError)
  })

  it('should return a date string', () => {
    let date = formatDate(new Date('January 1, 1970 00:00:00'))
    expect(date).toBe('70-01-01')
  })
})
