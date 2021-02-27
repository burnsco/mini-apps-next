import { Box, Heading, Text } from '@chakra-ui/react'
import { itemsVar } from './cache'

const allItemsCount = itemsVar().length

const LuggageTrackerHeader = () => (
  <Box>
    <Heading>Luggage</Heading>
    <Text>
      ({allItemsCount}) - {allItemsCount > 2 ? 'items' : 'item'}
    </Text>
  </Box>
)

export default LuggageTrackerHeader
