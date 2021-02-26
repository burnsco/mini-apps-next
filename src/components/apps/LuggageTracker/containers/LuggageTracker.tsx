import { Container } from '@chakra-ui/react'
import LuggageTrackerFilters from '../components/FilterGroup'
import LuggageTrackerInput from '../components/Input'
import LuggageTrackerListView from '../components/ListView'
import LuggageTrackerHeader from './Header'

const LuggageTracker = (props: LuggageTracker) => {
  const { items, filters } = props
  return (
    <Container>
      <LuggageTrackerHeader />
      <LuggageTrackerInput />
      <LuggageTrackerFilters filters={filters} />
      <LuggageTrackerListView items={items} />
    </Container>
  )
}
export default LuggageTracker
