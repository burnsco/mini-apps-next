import { FC } from 'react'
import LuggageTrackerList from './List'

const LuggageTrackerListView: FC<{}> = () => (
  <LuggageTrackerList
    togglePacked={togglePacked}
    filteredItems={filteredItems}
  />
)

export default LuggageTrackerListView
