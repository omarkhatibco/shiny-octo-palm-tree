'use client'

import { PropsWithChildren } from 'react'
import { client } from '@/utls/backend'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'urql'

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider value={client}>
      <ChakraProvider>{children}</ChakraProvider>
    </Provider>
  )
}
