import { Box, BoxProps } from "@chakra-ui/react"

const SmallCard = (props: BoxProps) => (
  <Box
    bg="white"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    rounded="md"
    shadow="md"
    {...props}
  />
)

export default SmallCard
