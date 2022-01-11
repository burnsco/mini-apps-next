import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

export default function Pokemon(props: any) {
  const router = useRouter()

  const borderColor = useColorModeValue('gray.100', '#313131')
  const hoverColor = useColorModeValue('gray.200', 'gray.600')
  const color = useColorModeValue('#202020', 'whitesmoke')
  const bg = useColorModeValue('whitesmoke', '#202020')

  const [input, setInput] = useState('')

  const filteredUsers = props.data.filter((user: User) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <Container maxW='xxl' mt='1'>
      <VStack spacing={4} mb={2}>
        <Heading>Pokemon Fetch!</Heading>
        <Text>No Pokemon Yet!</Text>
        <ButtonGroup>
          <Button as='a' href='/data-fetch/monsters-client'>
            Ability
          </Button>
          <Button as='a' href='/data-fetch/monsters-ssg'>
            Type
          </Button>
          <Button as='a' href='/data-fetch/monsters-ssr'>
            Damage
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
      <section>
        <SimpleGrid
          className='simple-grid-shop'
          columns={[1, 2, 3]}
          spacing={4}
          w='full'
        >
          {filteredUsers.map((user: User) => (
            <Box
              onClick={() => router.push(`/data-fetch/${user.id}`)}
              bg={bg}
              color={color}
              borderColor={borderColor}
              key={user.id}
              maxW='sm'
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
              shadow='md'
              _hover={{
                boxShadow: 'md',
                borderWidth: '1px',
                borderColor: hoverColor
              }}
            >
              <Center>
                <Image
                  loading='eager'
                  src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                  alt={`image-${user.name}`}
                />
              </Center>

              <Box p={4}>
                <Text>
                  <em>Name:</em> {user.name}
                </Text>
                <Text>
                  <em>Email: </em>
                  {user.email}
                </Text>
                <Text>
                  <em>Website:</em> {user.website}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </section>
    </Container>
  )
}
