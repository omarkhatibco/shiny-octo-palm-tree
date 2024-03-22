import { PropsWithChildren } from 'react'
import { client } from '@/utls'
import { Provider } from 'urql'

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>
}
