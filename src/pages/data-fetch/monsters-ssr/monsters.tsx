import { Box, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

export default function Monsters(users: User[]) {
  const router = useRouter()

  const [input, setInput] = useState('')

  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <main>
      <Heading>Monsters Rolodex</Heading>
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        maxW='sm'
        placeholder='search...'
        mb={2}
      />
      <section>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {filteredUsers.map((user: User) => (
            <Box
              onClick={() => router.push(`/monsters/${user.id}`)}
              key={user.id}
              maxW='sm'
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
              rounded='sm'
              bg='white'
              shadow='lg'
            >
              <Image
                alt={`image-${user.name}`}
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              />
              <Text>{user.name}</Text>
              <Text>{user.email}</Text>
              <Text>{user.website}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </section>
    </main>
  )
}
