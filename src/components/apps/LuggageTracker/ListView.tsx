import { gql, useQuery } from '@apollo/client'
import { Checkbox, HStack, List, ListItem, Text } from '@chakra-ui/react'

function LuggageTrackerList() {
  const items = useQuery(
    gql`
      query GetAllItemsQuery {
        items @client {
          id
          text
          completed
        }
      }
    `
  )
  const LuggageTrackerList = (props: any) => (
    <List mt={4}>
      {props.items.map((item: LuggageItem) => (
        <ListItem key={`list item-${item.id}-${item.completed}`}>
          <HStack>
            <Text>{item.text}</Text>
            <Checkbox size='md' isChecked={item.completed} />
          </HStack>
        </ListItem>
      ))}
    </List>
  )

  return <LuggageTrackerList items={items} />
}

export default LuggageTrackerList
