type User = {
  id: number
  name: string
  email: string
  website: string
}

type CurrentGame = {
  number: number
  roll: number[]
}

type VisibilityFilter = {
  id: string
  displayName: string
}

type LuggageItem = {
  id: string
  text: string
  completed: boolean
}

type SetFilterType = {
  setFilter: (filter: VisibilityFilter) => void
}

type LuggageItems = LuggageItem[]
type VisibilityFilters = VisibilityFilter[]
