import { ReactNode } from 'react'
import { getObjectKeys } from '@/utls'
import { SkeletonText, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

const loadingArr = Array.from({ length: 20 }).map((_, i) => i)

export function DataTable<T extends Record<string, unknown>>({
  data,
  isLoading,
}: {
  data: T[]
  isLoading: boolean
}) {
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
          {isLoading &&
            loadingArr.map(item => (
              <Tr key={item}>
                {keys.map((key: keyof T) => (
                  <Td key={key as string}>
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight='5'
                    />
                  </Td>
                ))}
              </Tr>
            ))}
          {!isLoading &&
            data.map(item => (
              <Tr key={item?.['id'] as string}>
                {keys.map((key: keyof T) => (
                  <Td key={key as string}>{item[key] as ReactNode}</Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
