import {
  Box,
  Button,
  chakra,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import AppMenuIcon from '@common/Icons/AppMenu'
import { useRouter } from 'next/dist/client/router'
import { FaMoon, FaSun } from 'react-icons/fa'

const links = [
  { id: 'app-index', title: 'Home', path: '/', icon: '🏠' },

  { id: 'dice-game', title: 'Dice Roll', path: '/dice/', icon: '🎲' },
  {
    id: 'calculator',
    title: 'Calculator',
    path: '/calculator/',
    icon: '🧮'
  },

  {
    id: 'lottery-generator',
    title: 'Lottery Numbers',
    path: '/lottery/',
    icon: '🎰'
  },

  {
    id: 'luggage-tracker',
    title: 'Luggage Tracker',
    path: '/luggage/',
    icon: '🧳'
  },

  {
    id: 'pizza-calculator',
    title: 'Pizza Calculator',
    path: '/pizza/',
    icon: '🍕'
  },

  {
    id: 'data-fetch',
    title: 'Monsters Rolodex',
    path: '/data-fetch/',
    icon: '👹'
  },

  { id: 'coin-flip', title: 'Flip Coin', path: '/coins/', icon: '🪙' },
  {
    id: 'tictactoe',
    title: 'Tic-Tac-Toe',
    path: '/tictactoe/',
    icon: '🧮'
  },
  {
    id: 'pokemon',
    title: 'pokemon',
    path: '/pokemon/',
    icon: '🧮'
  }
]

export default function HeaderContentNav() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const router = useRouter()

  return (
    <Box
      aria-label='Mobile Navigation'
      as='nav'
      justifyContent='center'
      alignItems='center'
      p={[1, 2, 3]}
      width='full'
    >
      <Menu>
        <MenuButton as={Button} rightIcon={<AppMenuIcon />}>
          {router.pathname === '/'
            ? 'Apps'
            : router.pathname.split('').slice(1).join('')}
        </MenuButton>
        <MenuList>
          {links.map(link => (
            <MenuItem
              key={`nav-link-mobile-${link.title}`}
              onClick={() => router.push(link.path)}
            >
              <chakra.span
                mr={2}
                role='img'
                aria-label={`menu item ${link.title}`}
              >
                {link.icon}
              </chakra.span>
              {link.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <IconButton
        size='md'
        fontSize='lg'
        aria-label={`Switch to ${text} mode`}
        variant='ghost'
        color='current'
        ml='3'
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
    </Box>
  )
}
