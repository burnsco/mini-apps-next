import { Flex, FlexProps, useColorMode } from '@chakra-ui/react'

const FlexContainer = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'black' }
  const fontColor = { light: 'black', dark: 'white' }

  return (
    <Flex
      direction='column'
      alignItems='center'
      bg={bgColor[colorMode]}
      color={fontColor[colorMode]}
      {...props}
    />
  )
}

export default FlexContainer
