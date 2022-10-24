import { Container, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

export default function Pokemon() {
  const router = useRouter()

  const borderColor = useColorModeValue('gray.100', '#313131')
  const hoverColor = useColorModeValue('gray.200', 'gray.600')
  const color = useColorModeValue('#202020', 'whitesmoke')
  const bg = useColorModeValue('whitesmoke', '#202020')

  const [input, setInput] = useState('')

  return (
    <Container maxW='xxl' mt='1'>
      <h1>Pokemon</h1>
    </Container>
  )
}
