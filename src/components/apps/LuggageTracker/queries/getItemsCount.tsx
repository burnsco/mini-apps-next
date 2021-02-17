import { gql } from "@apollo/client"

export const GET_ITEMS_COUNT = gql`
  query GetItemsCount {
    itemsCount @client
  }
`
