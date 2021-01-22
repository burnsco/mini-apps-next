import { Box, Heading, Image, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useState } from "react"

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?_page=1"
  )

  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

type User = {
  id: number
  name: string
  email: string
  website: string
}

const MonstersRolodexPage = ({
  users
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [input, setInput] = useState("")
  const filteredUsers = users.filter((user: any) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <main>
      <Heading>Monsters Rolodex</Heading>
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        maxW="sm"
        placeholder="search..."
        mb={2}
      />
      <section>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {filteredUsers.map((user: User) => (
            <Box
              key={user.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              rounded="sm"
              bg="white"
              shadow="lg"
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

export default MonstersRolodexPage
