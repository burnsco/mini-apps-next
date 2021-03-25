import { useReactiveVar } from '@apollo/client'
import { Center, Heading } from '@chakra-ui/react'
import { itemsVar } from './cache'

const LuggageTrackerHeader = () => {
  const itemsCount = useReactiveVar(itemsVar).length
  return (
    <Center>
      <Heading my={3}>Luggage Tracker ({itemsCount})</Heading>
    </Center>
  )
}

export default LuggageTrackerHeader
