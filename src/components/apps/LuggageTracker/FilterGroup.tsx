import { Button, ButtonGroup } from '@chakra-ui/react'
import { activeFilterVar } from './cache'

export default function LuggageTrackerFilterGroup(props: any) {
  return (
    <ButtonGroup mt={3} variant='outline' spacing='6'>
      {props.filters.map((filter: any) => (
        <Button
          onClick={() => activeFilterVar(filter)}
          colorScheme={props.activeFilter.id === filter.id ? 'red' : 'blue'}
          key={`filter-${filter.id}`}
        >
          {filter.displayName}
        </Button>
      ))}
    </ButtonGroup>
  )
}
