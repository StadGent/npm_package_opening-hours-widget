/* eslint-env jest */
import { merge } from './merge'

describe('Merge multiple objects into one', () => {
  it('should add properties from the second object into the first', () => {
    let a = {a: 1, b: 2, c: 3}
    let b = {d: 4, e: 5, f: 6}
    let c = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

    let merged = merge(a, b);

    expect(Object.keys(merged)).toHaveLength(6)
    expect(merged).toEqual(c)
  })

  it('should override properties when provided more than once', () => {
    let a = {a: 1, b: 2, c: 3}
    let b = {a: 4, b: 5, d: 6}
    let c = {a: 4, b: 5, c: 3, d: 6}

    let merged = merge(a, b);

    expect(Object.keys(merged)).toHaveLength(4)
    expect(merged).toEqual(c)
  })

  it('should deep merge properties', () => {
    let a = {a: 1, b: 2, c: { d: 4 }}
    let b = {c: { e: 5 }}
    let c =  {a: 1, b: 2, c: { d: 4, e: 5 }}

    let merged = merge(a, b);
    expect(Object.keys(merged)).toHaveLength(3)
    expect(merged).toEqual(c)
  })
})
