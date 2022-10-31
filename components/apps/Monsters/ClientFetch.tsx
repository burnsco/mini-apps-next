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
import { useEffect, useState } from 'react'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_page=1')
  return res.json()
}

export default function MonstersClient() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData().then(res => setData(res))
  }, [data])

  const router = useRouter()

  const borderColor = useColorModeValue('gray.100', '#313131')
  const hoverColor = useColorModeValue('gray.200', 'gray.600')
  const bg = useColorModeValue('whitesmoke', '#202020')

  const [input, setInput] = useState('')

  let filteredUsers: User[] | null

  if (data) {
    filteredUsers = data.filter((user: User) =>
      user.name.toLowerCase().includes(input.toLowerCase())
    )
  }

  return (
    <Container maxW='xxl' mt='1'>
      <VStack spacing={4} mb={2}>
        <Heading>Monsters Rolodex</Heading>
        <Text>Users are fetched on the client</Text>
        <Text>Using SWR</Text>
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
        <>
          <SimpleGrid
            className='simple-grid-shop'
            columns={[1, 2, 3]}
            spacing={4}
            w='full'
          >
            {data
              ? filteredUsers.map((user: User) => (
                  <Box
                    onClick={() =>
                      router.push(`/data-fetch/monsters-client/${user.id}`)
                    }
                    bg={bg}
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
                ))
              : null}
          </SimpleGrid>
        </>
      </section>
    </Container>
  )
}
