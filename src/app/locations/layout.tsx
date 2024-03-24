'use client'

import { BethIcon } from '@/assets/svg'

import { PageLayout } from '@/components/layouts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout
      icon={<BethIcon />}
      title='Locations'
    >
      {children}
    </PageLayout>
  )
}
