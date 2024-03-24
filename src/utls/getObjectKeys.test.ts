import { getObjectKeys } from './getObjectKeys'

describe('getObjectKeys', () => {
  it('should return object keys', () => {
    expect(getObjectKeys({ a: 1, b: 2 })).toEqual(['a', 'b'])
  })

  it('should return empty array if object is invalid', () => {
    // @ts-ignore
    expect(getObjectKeys()).toEqual([])
  })
})
