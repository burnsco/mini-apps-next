import { useQuery } from "@apollo/client"
import { Container } from "@chakra-ui/react"
import { FC } from "react"
import { itemsVar } from "./cache"
import LuggageTrackerFilters from "./FilterGroup"
import LuggageTrackerHeader from "./Header"
import LuggageTrackerInput from "./Input"
import LuggageTrackerListView from "./List"
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

const LuggageTracker: FC<{}> = () => {
  const {
    data: { activeFilter }
  } = useQuery(GET_ACTIVE_FILTER)

  const { data } = useQuery(GET_ALL_ITEMS)

  const togglePacked = (id: string) => {
    const itemz = [...itemsVar()]
    const index = itemz.findIndex(item => item.id === id)
    itemz[index].completed = !itemz[index].completed
    itemsVar([...itemz])
  }

  const filteredItems = filterLuggageItems(activeFilter, data.items)

  return (
    <Container>
      <LuggageTrackerHeader />
      <LuggageTrackerInput />
      <LuggageTrackerFilters />
      <LuggageTrackerListView
        filteredItems={filteredItems}
        togglePacked={togglePacked}
      />
    </Container>
  )
}

export default LuggageTracker
