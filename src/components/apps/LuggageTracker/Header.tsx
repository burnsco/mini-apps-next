import { Box, Heading, Text } from "@chakra-ui/react"
import { itemsVar } from "./cache"

const LuggageTrackerHeader = () => {
  const itemsCount = itemsVar().length
  return (
    <Box>
      <Heading>Luggage</Heading>

      <Text>
        ({itemsCount}) - {itemsCount === 1 ? "item" : "items"}
      </Text>
    </Box>
  )
}

export default LuggageTrackerHeader
