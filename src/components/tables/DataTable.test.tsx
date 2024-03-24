import { render } from '@testing-library/react'

import { DataTable } from './DataTable'

describe('DataTable', () => {
  const mockData = [
    { id: '1', name: 'John Doe', age: 30 },
    { id: '2', name: 'Jane Doe', age: 25 },
  ]

  test('renders without crashing', () => {
    render(
      <DataTable
        data={mockData}
        isLoading={false}
      />,
    )
  })

  test('displays correct headers', () => {
    const { getByText } = render(
      <DataTable
        data={mockData}
        isLoading={false}
      />,
    )
    expect(getByText('name')).toBeInTheDocument()
    expect(getByText('age')).toBeInTheDocument()
  })

  test('displays correct data', () => {
    const { getByText } = render(
      <DataTable
        data={mockData}
        isLoading={false}
      />,
    )
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('30')).toBeInTheDocument()
    expect(getByText('Jane Doe')).toBeInTheDocument()
    expect(getByText('25')).toBeInTheDocument()
  })

  test.skip('displays loading state correctly', () => {
    const { getAllByTestId } = render(
      <DataTable
        data={mockData}
        isLoading={true}
      />,
    )
    expect(getAllByTestId(/skeletonItem/i)).toHaveLength(20)
  })

  test('displays actions column when hasActions is true', () => {
    const { getByText } = render(
      <DataTable
        data={mockData}
        isLoading={false}
        hasActions={true}
      />,
    )
    expect(getByText('Actions')).toBeInTheDocument()
  })

  test('does not display actions column when hasActions is false', () => {
    const { queryByText } = render(
      <DataTable
        data={mockData}
        isLoading={false}
        hasActions={false}
      />,
    )
    expect(queryByText('Actions')).toBeNull()
  })
})
