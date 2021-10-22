import { useReactiveVar } from '@apollo/client'
import { Button, ButtonGroup, Flex, Spacer } from '@chakra-ui/react'
import { activeFilterVar, visibilityFiltersVar } from './cache'

export default function LuggageTrackerFilterGroup() {
  const filters = useReactiveVar(visibilityFiltersVar)
  const activeFilter = useReactiveVar(activeFilterVar)
  return (
    <Flex>
      <ButtonGroup variant='outline' spacing='1'>
        {filters.map((filter: any) => (
          <Button
            size='sm'
            onClick={() => activeFilterVar(filter)}
            colorScheme={activeFilter.id === filter.id ? 'red' : 'blue'}
            key={`filter-${filter.id}`}
          >
            {filter.displayName}
          </Button>
        ))}
      </ButtonGroup>
      <Spacer />
    </Flex>
  )
}
