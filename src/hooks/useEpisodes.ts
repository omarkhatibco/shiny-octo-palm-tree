import { useCallback, useMemo } from 'react'
import { useGetEpisodesQuery } from '@/graphql/generated'
import { parseAsInteger, useQueryState } from 'nuqs'

export const useEpisodes = () => {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const [{ data: episodesData, fetching: isLoading, error }] = useGetEpisodesQuery({
    variables: { page },
  })

  const data = useMemo(
    () => episodesData?.episodes?.results?.map(item => ({ ...item })) ?? [],
    [episodesData],
  )

  const info = useMemo(() => episodesData?.episodes?.info ?? {}, [episodesData])

  const { count, prev, next } = info

  const setNextPage = useCallback(() => {
    if (next) {
      setPage(next)
    }
  }, [next, setPage])

  const setPrevPage = useCallback(() => {
    if (prev) {
      setPage(prev)
    }
  }, [prev, setPage])

  const hasNextPage = useMemo(() => !!next, [next])
  const hasPrevPage = useMemo(() => !!prev, [prev])

  return {
    data,
    isLoading,
    error,
    currentEntries: data.length,
    totalEntries: count,
    hasNextPage,
    hasPrevPage,
    setNextPage,
    setPrevPage,
  }
}
