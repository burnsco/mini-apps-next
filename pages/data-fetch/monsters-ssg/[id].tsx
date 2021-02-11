import { Box, Center, Image, Text } from "@chakra-ui/react"
import { NextChakraLink } from "@common/index"
import { GetStaticPaths, GetStaticProps } from "next"

type User = {
  id: number
  name: string
  email: string
  website: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?_page=1"
  )
  const userList = await response.json()
  return {
    paths: userList.map((user: any) => ({
      params: {
        id: `${user.id}`
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.id}`
  )
  const user = await response.json()
  return {
    props: user
  }
}

export default function MonsterPage(user: User) {
  return (
    <Center>
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
      <NextChakraLink href="/monsters"> Go Back</NextChakraLink>
    </Center>
  )
}
