import {
  Box,
  Button,
  Center,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

type User = {
  id: number
  name: string
  email: string
  website: string
}

export default function SingleUserPage(user: User) {
  const router = useRouter()
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
        p={3}
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
        <Button onClick={() => router.back()}> Go Back</Button>
      </Box>
    </Center>
  )
}
