import { useQuery } from "@apollo/client"
import { Checkbox, HStack, List, ListItem, Text } from "@chakra-ui/react"
import { FC } from "react"
import { itemsVar } from "./cache"
import { GET_ACTIVE_FILTER } from "./queries/getActiveFilter"
import { GET_ALL_ITEMS } from "./queries/getAllItems"

function filterLuggageItems(filter: VisibilityFilter, items: LuggageItems) {
  switch (filter.id) {
    case "show_all":
      return items
    case "show_active":
      return items.filter((item: LuggageItem) => !item.completed)
    case "show_completed":
      return items.filter((item: LuggageItem) => item.completed)
    default:
      throw new Error()
  }
}

const LuggageTrackerListView: FC<{}> = () => {
  const {
    data: { activeFilter }
  } = useQuery(GET_ACTIVE_FILTER)

  const { data } = useQuery(GET_ALL_ITEMS)

  const togglePacked = (id: string) => {
    const itemz = [...itemsVar()]
    const index = itemz.findIndex(item => item.id === id)
    itemz[index].completed = !itemz[index].completed
    itemsVar(itemz)
  }

  const filteredItems = filterLuggageItems(activeFilter, data.items)

  return (
    <List mt={4}>
      {filteredItems?.map((item: LuggageItem) => (
        <ListItem key={`list item-${item.id}-${item.completed}`}>
          <HStack>
            <Text>{item.text}</Text>

            <Checkbox
              size="md"
              isChecked={item.completed}
              onChange={() => togglePacked(item.id)}
            />
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default LuggageTrackerListView
