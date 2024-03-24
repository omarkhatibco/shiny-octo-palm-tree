import { useCallback, useMemo } from 'react'
import { useGetLocationsQuery } from '@/graphql/generated'
import { parseAsInteger, useQueryState } from 'nuqs'

export const useLocations = () => {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const [{ data: locationsData, fetching: isLoading, error }] = useGetLocationsQuery({
    variables: { page },
  })

  const data = useMemo(
    () => locationsData?.locations?.results?.map(item => ({ ...item })) ?? [],
    [locationsData],
  )

  const info = useMemo(() => locationsData?.locations?.info ?? {}, [locationsData])

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
