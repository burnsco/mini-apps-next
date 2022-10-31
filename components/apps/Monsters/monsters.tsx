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
import Link from 'next/link'
import { useState } from 'react'

export default function Monsters(props: any) {
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
      <section>
        <SimpleGrid
          className='simple-grid-shop'
          columns={[1, 2, 3]}
          spacing={4}
          w='full'
        >
          {filteredUsers.map((user: User) => (
            <Link
              key={`monsterUser-${user.id}`}
              href='/data-fetch/[id]'
              as={`/data-fetch/${user.id}`}
            >
              <Box
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
            </Link>
          ))}
        </SimpleGrid>
      </section>
    </Container>
  )
}
