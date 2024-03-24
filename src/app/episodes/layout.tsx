'use client'

import { MortyIcon } from '@/assets/svg'

import { PageLayout } from '@/components/layouts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout
      icon={<MortyIcon />}
      title='Episodes'
    >
      {children}
    </PageLayout>
  )
}
