import { useCallback, useMemo } from 'react'
import { useGetEpisodesQuery } from '@/graphql/generated'
import { parseAsInteger, useQueryState } from 'nuqs'

export const useEpisodes = () => {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const [{ data: charactersData, fetching: isLoading, error }] = useGetEpisodesQuery({
    variables: { page },
  })

  const data = useMemo(() => charactersData?.episodes?.results || [], [charactersData])

  const info = useMemo(() => charactersData?.episodes?.info ?? {}, [charactersData])

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
