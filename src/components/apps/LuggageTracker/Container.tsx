import { Container, Stack } from '@chakra-ui/react'
import LuggageTrackerFilters from './FilterGroup'
import LuggageTrackerHeader from './Header'
import LuggageTrackerInput from './Input'
import LuggageTrackerListView from './ListView'

const LuggageTracker = () => {
  return (
    <Container>
      <LuggageTrackerHeader />
      <Stack p={4} shadow='lg' borderWidth='1px'>
        <LuggageTrackerInput />
        <LuggageTrackerFilters />
        <LuggageTrackerListView />
      </Stack>
    </Container>
  )
}
export default LuggageTracker
