import { Box, Center, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { NextChakraLink } from '@common/index'
import { GetStaticPaths, GetStaticProps } from 'next'

type User = {
  id: number
  name: string
  email: string
  website: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users?_page=1'
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
  if (!response) {
    return {
      redirect: {
        destination: '/data-fetch',
        permanent: false
      }
    }
  }

  const user = await response.json()
  return {
    props: user
  }
}

export default function MonsterPage(user: User) {
  const borderColor = useColorModeValue('gray.100', '#313131')
  const hoverColor = useColorModeValue('gray.200', 'gray.600')
  const color = useColorModeValue('#202020', 'whitesmoke')
  const bg = useColorModeValue('whitesmoke', '#202020')
  return (
    <Center>
      <Box
        key={user.id}
        maxW='sm'
        bg={bg}
        color={color}
        borderColor={borderColor}
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        shadow='md'
        _hover={{
          boxShadow: 'md',
          borderWidth: '1px',
          borderColor: hoverColor
        }}
        rounded='sm'
      >
        <Image
          alt={`image-${user.name}`}
          src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
        />
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.website}</Text>
      </Box>
      <Box ml={2}>
        <NextChakraLink href='/data-fetch'> Go Back</NextChakraLink>
      </Box>
    </Center>
  )
}
