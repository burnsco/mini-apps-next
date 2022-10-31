import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  Input,
  Text,
  VStack
} from '@chakra-ui/react'
import { useState } from 'react'

export default function MonstersHeader() {
  const [input, setInput] = useState('')

  return (
    <Container maxW='xxl' mt='1'>
      <VStack spacing={4} mb={2}>
        <Heading>Monsters Rolodex</Heading>
        <Text>
          Fetch data in every possible way, use different types, tables, cool
          stuff
        </Text>
        <ButtonGroup>
          <Button as='a' href='/data-fetch/monsters-client'>
            Client
          </Button>
          <Button as='a' href='/data-fetch/monsters-ssg'>
            SSG
          </Button>
          <Button as='a' href='/data-fetch/monsters-ssr'>
            SSR
          </Button>
        </ButtonGroup>
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          maxW='sm'
          placeholder='search...'
          mb={2}
        />
      </VStack>
    </Container>
  )
}
