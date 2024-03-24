'use client'

import { Container } from '@chakra-ui/react'

import { Providers } from '@/contexts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Perdoo | Rick & Morty Api</title>
      </head>
      <body>
        <Providers>
          <Container
            as='main'
            maxW='container.xl'
            alignItems={'center'}
            justifyContent={'center'}
            display='flex'
            minH={'100vh'}
          >
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
