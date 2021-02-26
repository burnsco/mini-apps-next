import { gql } from '@apollo/client'

export const GET_VISIBILITY_FILTERS = gql`
  query GetVisibilityFilter {
    visibilityFilters @client
  }
`
