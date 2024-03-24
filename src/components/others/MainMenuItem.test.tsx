import router from 'next/router'
import { fireEvent, render, waitFor } from '@testing-library/react'

import { MainMenuItem } from './MainMenuItem'

describe('MainMenuItem', () => {
  const { getByRole } = render(
    <MainMenuItem
      name='name'
      href='/12344'
      icon={<svg />}
    />,
  )
  const link = getByRole('link')

  it('has the correct title', () => {
    expect(getByRole('heading')).toBeInTheDocument()
  })

  it('has the correct  link', async () => {
    expect(link).toHaveAttribute('href', '/12344')
  })

  it('has a clickable link', async () => {
    waitFor(() => {
      fireEvent.click(link)
      expect(router.push).toHaveBeenCalledWith('/12344')
    })
  })
})
