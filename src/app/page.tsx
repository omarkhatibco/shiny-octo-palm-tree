import { mainMenu } from '@/config'
import { Box, Container, Heading, SimpleGrid, VStack } from '@chakra-ui/react'

import { MainMenuItem } from '@/components'

export default function Page() {
  return (
    <Container
      as='main'
      maxW='container.xl'
      alignItems={'center'}
      justifyContent={'center'}
      display='flex'
      minH={'100vh'}
    >
      <VStack
        align={'stretch'}
        w='full'
        gap={4}
      >
        <Heading>Rick & Morty Api</Heading>
        <Box
          as='nav'
          w='full'
        >
          <SimpleGrid
            as='ul'
            listStyleType={'none'}
            gap={4}
            columns={{ base: 1, md: 2, lg: 3 }}
          >
            {mainMenu.map(props => (
              <MainMenuItem
                key={props.name}
                {...props}
              />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  )
}
