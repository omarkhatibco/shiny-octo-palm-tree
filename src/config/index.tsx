import { ReactElement } from 'react'
import { BethIcon, MortyIcon, RickIcon } from '@/assets/svg'

export type MainMenuItem = {
  name: string
  href: string
  icon: ReactElement
}

export const mainMenu: MainMenuItem[] = [
  { name: 'Characters', href: '/characters', icon: <RickIcon /> },
  { name: 'Episodes', href: '/episodes', icon: <MortyIcon /> },
  { name: 'Locations', href: '/locations', icon: <BethIcon /> },
]
