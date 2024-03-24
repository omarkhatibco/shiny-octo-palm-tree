import { getObjectKeys } from '@/utls'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

export function DataTable<T>({ data }: { data: T[] }) {
  console.log(data)
  if (!Array.isArray(data) || data?.length === 0) {
    return <div>No data</div>
  }

  const keys = getObjectKeys(data)

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            {keys.map(key => (
              <Th key={key}>{key}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              {keys.map(key => (
                <Td key={key}>{item?.[key]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
