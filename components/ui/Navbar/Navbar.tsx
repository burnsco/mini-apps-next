import { chakra } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const HeaderContentNav = dynamic(() => import('./Content'))

function Navbar() {
  return (
    <chakra.div width='full'>
      <HeaderContentNav />
    </chakra.div>
  )
}
export default Navbar
