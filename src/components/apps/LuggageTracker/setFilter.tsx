import { ReactiveVar } from '@apollo/client'

export default (activeFilterVar: ReactiveVar<VisibilityFilter>) => (
  filter: VisibilityFilter
) => {
  activeFilterVar(filter)
}
