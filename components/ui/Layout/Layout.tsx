import { Flex } from "@chakra-ui/react"
import PropTypes from "prop-types"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Flex
      flexDirection="column"
      justifyContent="center"
      minWidth="100%"
      minHeight="100vh"
      wordBreak="break-word"
    >
      {children}
    </Flex>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
