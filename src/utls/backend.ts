import { cacheExchange, Client, fetchExchange } from 'urql'

export const client = new Client({
  url: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  exchanges: [cacheExchange, fetchExchange],
})
