import { InMemoryCache, makeVar, ReactiveVar } from '@apollo/client'

const initialState: LuggageItems = [
  {
    id: 'asdfsd09',
    completed: false,
    text: 'Hairbrush'
  }
]
const filters: VisibilityFilters = [
  {
    id: 'show_all',
    displayName: 'All'
  },
  {
    id: 'show_completed',
    displayName: 'Completed'
  },
  {
    id: 'show_active',
    displayName: 'Active'
  }
]

export const itemsVar: ReactiveVar<LuggageItems> = makeVar<LuggageItems>(
  initialState
)
export const visibilityFiltersVar: ReactiveVar<VisibilityFilters> = makeVar<VisibilityFilters>(
  filters
)
export const activeFilterVar: ReactiveVar<VisibilityFilter> = makeVar({
  id: 'show_all',
  displayName: 'All'
})

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        items: {
          read() {
            if (activeFilterVar().id === 'show_completed') {
              return itemsVar().filter(item => item.completed)
            }
            if (activeFilterVar().id === 'show_active') {
              return itemsVar().filter(item => !item.completed)
            }
            return itemsVar()
          }
        },
        visibilityFilters: {
          read() {
            return visibilityFiltersVar()
          }
        },
        activeFilter: {
          read() {
            return activeFilterVar()
          }
        }
      }
    }
  }
})
