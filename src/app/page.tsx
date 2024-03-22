'use client'

import { useGetCharectersQuery } from '@/graphql/generated'
import { Button } from '@chakra-ui/react'

export default function Page() {
  const [result] = useGetCharectersQuery()
  console.log(result)
  return (
    <main>
      hello Perdoo! <Button>hello Perdoo! </Button>
    </main>
  )
}
