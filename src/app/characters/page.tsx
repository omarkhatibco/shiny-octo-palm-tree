'use client'

import { LoadingSpinner } from '@/components/others'
import { DataPagination, DataTable } from '@/components/tables'
import { useCharecters } from '@/hooks'

export default function Page() {
  const { data, isLoading, ...rest } = useCharecters()
  return (
    <>
      {isLoading && !data ? (
        <LoadingSpinner />
      ) : (
        <>
          <DataTable
            data={data}
            isLoading={isLoading}
            hasActions
            pathPrefix='/characters'
          />
          <DataPagination {...rest} />
        </>
      )}
    </>
  )
}
