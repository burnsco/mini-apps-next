import { Button, ButtonGroup } from '@chakra-ui/react'
import { activeFilterVar, visibilityFiltersVar } from './cache'

const filters = visibilityFiltersVar()

const LuggageTrackerFilterGroup = () => (
  <ButtonGroup mt={3} variant='outline' spacing='6'>
    {filters.map((filter: any) => (
      <Button
        onClick={() => activeFilterVar(filter)}
        colorScheme={activeFilterVar().id === filter.id ? 'red' : 'blue'}
        key={`filter-${filter.id}`}
      >
        {filter.displayName} - ( )
      </Button>
    ))}
  </ButtonGroup>
)

export default LuggageTrackerFilterGroup
