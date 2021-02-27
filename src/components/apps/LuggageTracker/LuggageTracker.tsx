import { Container } from '@chakra-ui/react'
import LuggageTrackerFilters from './FilterGroup'
import LuggageTrackerHeader from './Header'
import LuggageTrackerInput from './Input'
import LuggageTrackerListView from './ListView'

const LuggageTracker = () => (
  <Container>
    <LuggageTrackerHeader />
    <LuggageTrackerInput />
    <LuggageTrackerFilters />
    <LuggageTrackerListView />
  </Container>
)
export default LuggageTracker
