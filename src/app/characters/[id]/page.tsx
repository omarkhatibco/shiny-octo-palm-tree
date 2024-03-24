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
  Image,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'

import { LoadingSpinner } from '@/components/others'
import { useSingleCharecter } from '@/hooks'

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { isLoading, data } = useSingleCharecter(id)

  const { name, image, ...rest } = data || {}

  const keys = getObjectKeys(rest)

  return (
    <>
      {isLoading && !data ? (
        <LoadingSpinner />
      ) : (
        <Center>
          <Card
            maxW={{ base: 0, md: '50%' }}
            w={'full'}
          >
            <CardHeader>
              <Heading size='md'>{name}</Heading>
            </CardHeader>

            <CardBody>
              {image && (
                <Center mb={8}>
                  <Image
                    src={image}
                    alt={name ?? 'Character Image'}
                    borderRadius='lg'
                  />
                </Center>
              )}
              <Stack
                divider={<StackDivider />}
                spacing='4'
              >
                {keys.map(key => {
                  const value = data?.[key as keyof typeof data] as ReactElement

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
      )}
    </>
  )
}
