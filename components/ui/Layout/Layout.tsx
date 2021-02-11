import { ChakraProvider, Flex, theme } from "@chakra-ui/react"
import PageTransition from "@common/Animated/page-transition"
import { Container } from "@common/index"
import PropTypes from "prop-types"
import { Navbar } from ".."

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Flex
      flexDirection="column"
      justifyContent="center"
      minWidth="100%"
      minHeight="95vh"
      wordBreak="break-word"
    >
      <Container mt={5}>
        <PageTransition>{children}</PageTransition>
      </Container>
    </Flex>
  </ChakraProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
