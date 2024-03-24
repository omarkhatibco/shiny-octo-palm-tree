'use client'

import { useGetCharectersQuery, useGetEpisodesQuery } from '@/graphql/generated'
import { Button } from '@chakra-ui/react'

export default function Page() {
  const [result] = useGetCharectersQuery({ variables: { page: 2 } })
  const [eps] = useGetEpisodesQuery()
  console.log({ result })
  console.log({ eps })
  return (
    <main>
      hello Perdoo! <Button>hello Perdoo! </Button>
    </main>
  )
}
