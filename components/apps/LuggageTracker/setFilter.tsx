import { ReactiveVar } from '@apollo/client'

export const setFilter =
  (activeFilterVar: ReactiveVar<VisibilityFilter>) =>
  (filter: VisibilityFilter) => {
    activeFilterVar(filter)
  }
