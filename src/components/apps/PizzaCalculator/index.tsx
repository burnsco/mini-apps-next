import { Heading, Input, List, ListItem, Text } from '@chakra-ui/react'
import { FC } from 'react'

const PizzaCalculator: FC<{}> = () => (
  <>
    <Heading>Pizza Calculator</Heading>
    <Text>Track your pack/unpacked luggage before a trip!</Text>
    <Text>Using apollo local state (to make it interesting)</Text>
    <Input type='text' />
    <List>
      <ListItem>one</ListItem>
    </List>
  </>
)

export default PizzaCalculator
