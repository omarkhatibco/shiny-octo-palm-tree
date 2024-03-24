import { useMemo } from 'react'
import { useGetLocationsByIdsQuery } from '@/graphql/generated'

export const useSingleLocation = (id: string) => {
  const [{ fetching: isLoading, data: dataObject, error }] = useGetLocationsByIdsQuery({
    variables: { ids: [id] },
  })

  const data = useMemo(() => dataObject?.locationsByIds?.[0], [dataObject])

  return {
    data,
    error,
    isLoading,
  }
}
