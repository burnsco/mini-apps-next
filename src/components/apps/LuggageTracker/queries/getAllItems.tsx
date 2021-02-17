import { gql } from "@apollo/client"

export const GET_ALL_ITEMS = gql`
  query GetAllItems {
    items @client
  }
`
