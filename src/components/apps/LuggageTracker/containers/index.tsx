import { useQuery } from '@apollo/client'
import { GET_ACTIVE_FILTER } from '../queries/getActiveFilter'
import { GET_ALL_ITEMS } from '../queries/getAllItems'
import { GET_VISIBILITY_FILTERS } from '../queries/getFilters'
import LuggageTracker from './LuggageTracker'

const LuggageTrackerApp = () => {
  const { data: activeFilter } = useQuery(GET_ACTIVE_FILTER)
  const { data: allItems } = useQuery(GET_ALL_ITEMS)
  const { data: allFilters } = useQuery(GET_VISIBILITY_FILTERS)

  return (
    <LuggageTracker
      activeFilter={activeFilter}
      items={allItems}
      filters={allFilters}
    />
  )
}

export default LuggageTrackerApp
