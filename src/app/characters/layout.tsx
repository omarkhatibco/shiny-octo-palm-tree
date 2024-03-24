import { RickIcon } from '@/assets/svg'

import { PageLayout } from '@/components/layouts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout
      icon={<RickIcon />}
      title='Characters'
    >
      {children}
    </PageLayout>
  )
}
