'use client'

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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
