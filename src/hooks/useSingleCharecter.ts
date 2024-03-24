import { useMemo } from 'react'
import { useGetCharectersByIdsQuery } from '@/graphql/generated'

export const useSingleCharecter = (id: string) => {
  const [{ fetching: isLoading, data: dataObject, error }] = useGetCharectersByIdsQuery({
    variables: { ids: [id] },
  })

  const data = useMemo(() => {
    const d = dataObject?.charactersByIds?.[0]

    if (d) {
      return {
        ...d,
        ...(d.location && { location: d.location.name }),
        ...(d.origin && { origin: d.origin.name }),
      }
    }
    return {}
  }, [dataObject])

  return {
    data,
    error,
    isLoading,
  }
}
