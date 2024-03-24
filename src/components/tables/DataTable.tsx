import { ReactNode } from 'react'
import { getObjectKeys } from '@/utls'
import { SkeletonText, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { DataItemActions } from './DataItemActions'

const loadingArr = Array.from({ length: 20 }).map((_, i) => i)

export function DataTable<T extends Record<string, unknown>>({
  data,
  isLoading,
  hasActions,
  pathPrefix,
}: {
  data: T[]
  isLoading: boolean
  hasActions?: boolean
  pathPrefix?: string
}) {
  const keys = getObjectKeys(data?.[0] ?? {})

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            {keys.map(key => (
              <Th key={key}>{key?.replaceAll('_', ' ')}</Th>
            ))}
            {hasActions && <Th>Actions</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {isLoading &&
            loadingArr.map(item => (
              <Tr key={item}>
                {keys.map((key: keyof T) => (
                  <Td key={key as string}>
                    <SkeletonText
                      data-testid='skeletonItem'
                      noOfLines={1}
                      skeletonHeight='5'
                    />
                  </Td>
                ))}
                {hasActions && (
                  <Td>
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight='5'
                    />
                  </Td>
                )}
              </Tr>
            ))}
          {!isLoading &&
            data.map(item => (
              <Tr key={item?.['id'] as string}>
                {keys.map((key: keyof T) => (
                  <Td key={key as string}>{item[key] as ReactNode}</Td>
                ))}
                {hasActions && (
                  <Td>
                    <DataItemActions
                      id={item?.['id'] as string}
                      pathPrefix={pathPrefix}
                    />
                  </Td>
                )}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
