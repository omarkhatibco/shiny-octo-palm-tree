import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('should format date', () => {
    expect(formatDate('2021-01-01')).toBe('1/1/2021')
  })

  it('should throw error if date is invalid', () => {
    // @ts-ignore
    expect(() => formatDate()).toThrowError('Invalid date')
  })
})
