import { FC } from 'react'
import { Button, Flex, HStack, Text } from '@chakra-ui/react'

export type DataPaginationProps = {
  currentEntries: number
  totalEntries?: number | null
  hasNextPage: boolean
  hasPrevPage: boolean
  setNextPage: () => void
  setPrevPage: () => void
}

export const DataPagination: FC<DataPaginationProps> = ({
  currentEntries,
  totalEntries,
  hasNextPage,
  hasPrevPage,
  setNextPage,
  setPrevPage,
}) => {
  if (!totalEntries) return null

  return (
    <Flex
      align={'center'}
      justifyContent={'space-between'}
    >
      <Text>
        Showing {currentEntries} of {totalEntries} entries
      </Text>

      <HStack>
        <Button
          onClick={setPrevPage}
          isDisabled={!hasPrevPage}
        >
          Previous
        </Button>
        <Button
          onClick={setNextPage}
          isDisabled={!hasNextPage}
        >
          Next
        </Button>
      </HStack>
    </Flex>
  )
}
