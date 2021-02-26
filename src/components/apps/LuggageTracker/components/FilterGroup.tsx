import { useQuery } from '@apollo/client'
import { Button, ButtonGroup, Spinner } from '@chakra-ui/react'
import { activeFilterVar } from '../cache'
import { GET_ACTIVE_FILTER } from '../queries/getActiveFilter'
import { GET_VISIBILITY_FILTERS } from '../queries/getFilters'

const LuggageTrackerFilterGroup = () => {
  const { data: filters, loading: loadingFilters } = useQuery(
    GET_VISIBILITY_FILTERS
  )

  const {
    data: { activeFilter },
    loading: loadingActiveFilter
  } = useQuery(GET_ACTIVE_FILTER)

  if (loadingFilters) {
    return <Spinner />
  }

  return (
    <ButtonGroup mt={3} variant='outline' spacing='6'>
      {filters.visibilityFilters.map((filter: any) => (
        <Button
          isDisabled={loadingActiveFilter}
          onClick={() => {
            activeFilterVar(filter)
          }}
          colorScheme={activeFilter.id === filter.id ? 'red' : 'blue'}
          key={`filter-${filter.id}`}
        >
          {filter.displayName} - ()
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default LuggageTrackerFilterGroup
