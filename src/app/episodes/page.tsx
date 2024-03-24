'use client'

import { LoadingSpinner } from '@/components/others'
import { DataPagination, DataTable } from '@/components/tables'
import { useEpisodes } from '@/hooks'

export default function Page() {
  const { data, isLoading, ...rest } = useEpisodes()
  return (
    <>
      {isLoading && !data ? (
        <LoadingSpinner />
      ) : (
        <>
          <DataTable
            data={data}
            isLoading={isLoading}
          />
          <DataPagination {...rest} />
        </>
      )}
    </>
  )
}
