'use client'

import { DataTable } from '@/components/tables'
import { useCharecters } from '@/hooks'

export default function Page() {
  const { data, isLoading, keys } = useCharecters()
  return (
    <div>
      <DataTable data={data} />
    </div>
  )
}
