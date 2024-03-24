import { fireEvent, render, waitFor } from '@testing-library/react'
import { vi } from 'vitest'

import { DataPagination } from './DataPagination'

describe('DataPagination', () => {
  const nextFns = vi.fn()
  const prevFns = vi.fn()

  const { getByRole, getByTestId } = render(
    <DataPagination
      totalEntries={250}
      currentEntries={15}
      setNextPage={nextFns}
      setPrevPage={prevFns}
      hasNextPage={true}
      hasPrevPage={false}
    />,
  )

  const nextButton = getByRole('button', { name: 'Next' })
  const prevButton = getByRole('button', { name: 'Previous' })

  it('showing the correct numbers ', () => {
    expect(getByTestId('entries').innerHTML).toBe('Showing 15 of 250 entries')
  })

  it('has a enabled Next button and is clickable ', () => {
    expect(nextButton).toBeEnabled()

    fireEvent.click(nextButton)

    waitFor(() => {
      expect(nextFns).toBeCalled()
    })
  })

  it('has a disabled Previous button and it is not clickable ', () => {
    expect(prevButton).toBeDisabled()

    fireEvent.click(prevButton)

    waitFor(() => {
      expect(prevButton).toBeCalledTimes(0)
    })
  })
})
