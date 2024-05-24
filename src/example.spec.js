import { describe, expect, it, vi } from 'vitest'
import { example } from '../index.js'

describe('example', () => {
  it('should print hello world', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(
      output => output,
    )

    example()
    expect(logSpy).toHaveBeenCalled('hello world')
    logSpy.mockClear()
  })
})
