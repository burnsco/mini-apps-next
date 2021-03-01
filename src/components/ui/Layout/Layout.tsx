import { ChakraProvider, Flex, theme } from '@chakra-ui/react'
import PageTransition from '@common/Animated/page-transition'
import MainContainer from '@common/Containers/Main'
import Navbar from '@ui/Navbar'
import PropTypes from 'prop-types'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Flex
      flexDirection='column'
      minWidth='100%'
      minHeight='95vh'
      wordBreak='break-word'
    >
      <MainContainer mt={5}>
        <PageTransition>{children}</PageTransition>
      </MainContainer>
    </Flex>
  </ChakraProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
