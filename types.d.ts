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
  id: number
  text: string
  completed: boolean
}

type LuggageItems = LuggageItem[]
