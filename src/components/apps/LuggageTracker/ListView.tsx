import { Checkbox, HStack, List, ListItem, Text } from '@chakra-ui/react'
import { itemsVar } from './cache'

export default function LuggageTrackerList(props: any) {
  return (
    <List mt={4}>
      {props.items.map((item: any) => (
        <ListItem key={`list item-${item.id}-${item.completed}`}>
          <HStack>
            <Text>{item.text}</Text>
            <Checkbox
              size='md'
              isChecked={item.completed}
              onChange={() => {
                itemsVar([
                  ...itemsVar().map(i =>
                    i.id !== item.id
                      ? { ...i }
                      : { ...i, completed: !i.completed }
                  )
                ])
              }}
            />
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
