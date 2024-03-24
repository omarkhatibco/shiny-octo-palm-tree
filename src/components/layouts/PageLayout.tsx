import { cloneElement, PropsWithChildren, ReactElement } from 'react'
import Link from 'next/link'
import { Button, Flex, Heading, VStack } from '@chakra-ui/react'

export type PageLayoutProps = PropsWithChildren<{
  title: string
  icon: ReactElement
}>

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title, icon }) => {
  return (
    <VStack
      align={'stretch'}
      w='full'
      gap={4}
    >
      {cloneElement(icon, { w: 32, h: 32 })}
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Heading>{title}</Heading>
        <Button
          as={Link}
          href='/'
        >
          HomePage
        </Button>
      </Flex>
      {children}
    </VStack>
  )
}
