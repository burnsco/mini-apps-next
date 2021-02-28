import { gql, useQuery } from '@apollo/client'
import { Container } from '@chakra-ui/react'
import LuggageTrackerFilters from '../FilterGroup'
import LuggageTrackerHeader from '../Header'
import LuggageTrackerInput from '../Input'
import LuggageTrackerListView from '../ListView'

const LuggageTracker = () => {
  const {
    data: { visibilityFilters }
  } = useQuery(gql`
    query GetAllFiltersQuery {
      visibilityFilters @client
    }
  `)

  const {
    data: { activeFilter }
  } = useQuery(gql`
    query GetActiveFilter {
      activeFilter @client
    }
  `)

  const {
    data: { items }
  } = useQuery(
    gql`
      query GetAllItemsQuery {
        items @client
      }
    `
  )

  return (
    <Container>
      <LuggageTrackerHeader />
      <LuggageTrackerInput />
      <LuggageTrackerFilters
        filters={visibilityFilters}
        activeFilter={activeFilter}
      />
      <LuggageTrackerListView items={items} />
    </Container>
  )
}
export default LuggageTracker
