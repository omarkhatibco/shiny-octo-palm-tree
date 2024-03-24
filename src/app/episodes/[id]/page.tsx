'use client'

import { ReactElement } from 'react'
import { getObjectKeys } from '@/utls'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'

import { LoadingSpinner } from '@/components/others'
import { DataTable } from '@/components/tables'
import { useSingleEpisode } from '@/hooks'

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { isLoading, data } = useSingleEpisode(id)

  const { name, characters, ...rest } = data || {}

  const keys = getObjectKeys(rest)

  const dataTableData = Array.isArray(characters)
    ? characters?.map(character => {
        return {
          ...character,
          ...(character?.location && { location: character?.location?.name }), // location is not defined in the schema
          ...(character?.origin && { origin: character?.origin?.name }), // location is not defined in the schema
        }
      })
    : []

  return (
    <>
      {isLoading && !data ? (
        <LoadingSpinner />
      ) : (
        <VStack
          gap={8}
          align={'stretch'}
        >
          <Center>
            <Card
              maxW={{ base: 0, md: '50%' }}
              w={'full'}
            >
              <CardHeader>
                <Heading size='md'>{name}</Heading>
              </CardHeader>

              <CardBody>
                <Stack
                  divider={<StackDivider />}
                  spacing='4'
                >
                  {keys.map(key => {
                    const value = rest?.[key as keyof typeof data] as ReactElement

                    if (!value) return null

                    return (
                      <Box key={key}>
                        <Heading
                          size='xs'
                          textTransform='uppercase'
                        >
                          {key}
                        </Heading>
                        <Text
                          pt='2'
                          fontSize='sm'
                        >
                          {value}
                        </Text>
                      </Box>
                    )
                  })}
                </Stack>
              </CardBody>
            </Card>
          </Center>
          <Heading size='md'>{'Residents'}</Heading>
          <DataTable
            data={dataTableData}
            isLoading={isLoading}
          />
        </VStack>
      )}
    </>
  )
}
