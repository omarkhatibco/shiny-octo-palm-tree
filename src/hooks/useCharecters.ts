import { useCallback, useMemo } from 'react'
import { useGetCharectersQuery } from '@/graphql/generated'
import { parseAsInteger, useQueryState } from 'nuqs'

export const useCharecters = () => {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const [{ data: charactersData, fetching: isLoading, error }] = useGetCharectersQuery({
    variables: { page },
  })

  const data = useMemo(
    () =>
      charactersData?.characters?.results?.map(item => ({
        ...item,
        origin: item?.origin?.name,
        location: item?.location?.name,
      })) ?? [],
    [charactersData],
  )

  const info = useMemo(() => charactersData?.characters?.info ?? {}, [charactersData])

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
