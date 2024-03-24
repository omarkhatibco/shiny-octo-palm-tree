'use client'

import { LoadingSpinner } from '@/components/others'
import { DataPagination, DataTable } from '@/components/tables'
import { useLocations } from '@/hooks'

export default function Page() {
  const { data, isLoading, ...rest } = useLocations()
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
