import { Checkbox, HStack, List, ListItem, Text } from '@chakra-ui/react'
import { FC } from 'react'

const LuggageTrackerList: FC<{
  filteredItems?: LuggageItems
  togglePacked: (id: string) => void
}> = ({ filteredItems, togglePacked }) => (
  <List mt={4}>
    {filteredItems?.map((item: LuggageItem) => (
      <ListItem key={`list item-${item.id}-${item.completed}`}>
        <HStack>
          <Text>{item.text}</Text>

          <Checkbox
            size='md'
            isChecked={item.completed}
            onChange={() => {
              togglePacked(item.id)
            }}
          />
        </HStack>
      </ListItem>
    ))}
  </List>
)

export default LuggageTrackerList
