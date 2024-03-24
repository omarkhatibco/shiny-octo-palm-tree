import { useMemo } from 'react'
import { useGetEpisodesByIdsQuery } from '@/graphql/generated'

export const useSingleEpisode = (id: string) => {
  const [{ fetching: isLoading, data: dataObject, error }] = useGetEpisodesByIdsQuery({
    variables: { ids: [id] },
  })

  const data = useMemo(() => dataObject?.episodesByIds?.[0], [dataObject])

  return {
    data,
    error,
    isLoading,
  }
}
