import {
  Box,
  Button,
  chakra,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react"
import AppMenuIcon from "@common/Icons/AppMenu"
import { NextChakraLink } from "@common/index"
import { useRouter } from "next/dist/client/router"

const links = [
  { id: "app-index", title: "Home", path: "/", icon: "🏠" },

  { id: "dice-game", title: "Dice Roll", path: "/dice/", icon: "🎲" },

  {
    id: "lottery-generator",
    title: "Lottery Numbers",
    path: "/lottery/",
    icon: "🎰"
  },

  {
    id: "luggage-tracker",
    title: "Luggage Tracker",
    path: "/luggage/",
    icon: "🧳"
  },

  {
    id: "pizza-calculator",
    title: "Pizza Calculator",
    path: "/pizza/",
    icon: "🍕"
  },

  {
    id: "monsters-rolodex",
    title: "Monsters Rolodex",
    path: "/monsters/",
    icon: "👹"
  },

  { id: "coin-flip", title: "Flip Coin", path: "/coins/", icon: "🪙" }
]

function HeaderContent() {
  return (
    <Box
      width="100%"
      display={{ sm: "none", md: "none", lg: "none", xl: "block" }}
    >
      <Flex
        aria-label="Primary"
        as="nav"
        justifyContent="space-evenly"
        alignItems="center"
        p={[1, 2, 3]}
      >
        {links.map(link => (
          <NextChakraLink
            href={link.path}
            fontSize={["xs", "sm"]}
            aria-label={`Navigation Link ${link.id}`}
            fontWeight={400}
            _hover={{
              color: "blue"
            }}
            display="block"
            transition="all 0.3s"
            key={link.id}
          >
            <chakra.span
              mr={2}
              role="img"
              aria-label={`menu item ${link.title}`}
            >
              {link.icon}
            </chakra.span>
            {link.title}
          </NextChakraLink>
        ))}
      </Flex>
    </Box>
  )
}

function HeaderContentNav() {
  const router = useRouter()

  return (
    <Box
      aria-label="Mobile Navigation"
      as="nav"
      justifyContent="center"
      alignItems="center"
      p={[1, 2, 3]}
      width="full"
      display={{ sm: "block", md: "block", lg: "block", xl: "none" }}
    >
      <Menu>
        <MenuButton as={Button} rightIcon={<AppMenuIcon />}>
          {router.pathname === "/"
            ? "Apps"
            : router.pathname.split("").slice(1).join("")}
        </MenuButton>
        <MenuList>
          {links.map(link => (
            <MenuItem
              key={`nav-link-mobile-${link.title}`}
              onClick={() => router.push(link.path)}
            >
              <chakra.span
                mr={2}
                role="img"
                aria-label={`menu item ${link.title}`}
              >
                {link.icon}
              </chakra.span>
              {link.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}

function Navbar() {
  return (
    <chakra.div width="full">
      <HeaderContentNav />
      <HeaderContent />
    </chakra.div>
  )
}
export default Navbar
