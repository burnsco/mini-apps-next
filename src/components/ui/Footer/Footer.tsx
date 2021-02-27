import { Box, Text } from '@chakra-ui/react'

const Footer = () => (
  <Box
    display='flex'
    color='white'
    width='100%'
    height='50px'
    bg='primary'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
  >
    <Text p='2' mt='3' color='white'>
      Corey Burns
      <Text as='span' color='red'>
        © {new Date().getFullYear()}
      </Text>
    </Text>
  </Box>
)

export default Footer
