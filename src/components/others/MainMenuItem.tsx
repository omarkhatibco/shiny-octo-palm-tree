import { cloneElement, FC } from 'react'
import Link from 'next/link'
import type { MainMenuItem as MainMenuItemProps } from '@/config'
import { AspectRatio, Heading, LinkBox, LinkOverlay, VStack } from '@chakra-ui/react'

export const MainMenuItem: FC<MainMenuItemProps> = ({ name, href, icon }) => {
  return (
    <LinkBox
      as='li'
      w='full'
      p={4}
      borderWidth={1}
      borderRadius='md'
      borderColor='gray.200'
      bgColor={'gray.50'}
      _hover={{
        borderColor: 'gray.400',
        bgColor: 'gray.100',
      }}
    >
      <AspectRatio
        ratio={3 / 4}
        as='article'
      >
        <VStack>
          {cloneElement(icon, { w: 32, h: 32 })}
          <Heading as='h1'>
            <LinkOverlay
              as={Link}
              href={href}
              prefetch={true}
            >
              {name}
            </LinkOverlay>
          </Heading>
        </VStack>
      </AspectRatio>
    </LinkBox>
  )
}
