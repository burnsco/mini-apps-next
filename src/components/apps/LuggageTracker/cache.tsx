import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client"
import { VisibilityFilters } from "./visibility-filter"

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        items: {
          read() {
            return itemsVar()
          }
        },
        visibilityFilter: {
          read() {
            return visibilityFilterVar()
          }
        }
      }
    }
  }
})

/**
 * Set initial values when we create cache variables.
 */

const initialState: LuggageItems = [
  {
    id: 0,
    completed: false,
    text: "Hairbrush"
  }
]

export const itemsVar: ReactiveVar<LuggageItems> = makeVar<LuggageItems>(
  initialState
)

export const visibilityFilterVar = makeVar<VisibilityFilter>(
  VisibilityFilters.SHOW_ALL
)
