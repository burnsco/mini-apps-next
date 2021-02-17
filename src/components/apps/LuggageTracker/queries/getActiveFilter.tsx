import { gql } from "@apollo/client"

export const GET_ACTIVE_FILTER = gql`
  query GetActiveFilter {
    activeFilter @client
  }
`
