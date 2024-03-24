import { beforeAll, vi } from 'vitest'

import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  vi.mock('next/router', () => require('next-router-mock'))
  vi.mock('next/navigation', () => ({
    ...require('next-router-mock'),
    useSearchParams: () => {
      const router = require('next-router-mock').useRouter()
      const path = router.asPath.split('?')?.[1] ?? ''
      return new URLSearchParams(path)
    },
    useParams: () => {
      const router = require('next-router-mock').useRouter()
      const path = router.asPath.split('?')?.[0] ?? ''
      const params = path.split('/')
      return params
    },
    usePathname: () => {
      const router = require('next-router-mock').useRouter()
      return router.asPath
    },
    notFound: vi.fn(),
  }))
  vi.mock('nuqs', () => ({
    useQueryState: param => {
      const router = require('next-router-mock').useRouter()
      const path = router.asPath.split('?')?.[1] ?? ''
      const allParams = new URLSearchParams(path)
      const currentParam = allParams.get(param)
      return [currentParam, (value: string) => allParams.set(param, value)]
    },
    parseAsBoolean: {},
  }))
})
