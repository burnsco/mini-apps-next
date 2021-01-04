import { Box, chakra, Flex } from "@chakra-ui/react"
import { NextChakraLink } from "@common/index"

function capitalizedTitle(title: string) {
  return title.charAt(0).toUpperCase() + title.slice(1)
}

const links = [
  { id: "home", href: "/" },
  { id: "apps", href: "/apps" },
  { id: "about", href: "/about" },
  { id: "contact", href: "/contact" }
]

function HeaderContent() {
  return (
    <Box width="100%">
      <Flex
        aria-label="Primary"
        as="nav"
        justifyContent="space-evenly"
        alignItems="center"
        p={[1, 2, 3]}
      >
        {links.map(link => (
          <NextChakraLink
            href={link.href}
            fontSize={["xs", "sm", "md"]}
            aria-label={`Navigation Link ${link.id}`}
            fontWeight={500}
            _hover={{
              color: "blue"
            }}
            display="block"
            transition="all 0.3s"
            key={link.id}
          >
            {capitalizedTitle(link.id)}
          </NextChakraLink>
        ))}
      </Flex>
    </Box>
  )
}

function Navbar() {
  return (
    <chakra.div bg="black" width="full">
      <HeaderContent />
    </chakra.div>
  )
}
export default Navbar
