import { Center, Spinner } from '@chakra-ui/react'

export const LoadingSpinner = () => {
  return (
    <Center p={16}>
      <Spinner size='xl' />
    </Center>
  )
}
