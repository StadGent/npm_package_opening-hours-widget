/* eslint-env jest */
import { formatDate, now, pad } from './date'

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

describe('pad a value', () => {
  it('should pad a string', () => {
    expect(pad('t')).toBe('0t')
    expect(pad('test')).toBe('test')
    expect(pad('test', 10)).toBe('000000test')
    expect(pad('test', 10, 'x')).toBe('xxxxxxtest')
  })

  it('should pad a number', () => {
    expect(pad(1)).toBe('01')
    expect(pad(12)).toBe('12')
    expect(pad(12, 10)).toBe('0000000012')
    expect(pad(12, 10, 'x')).toBe('xxxxxxxx12')
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
