import { ApolloClient, ApolloProvider } from '@apollo/client'
import { cache } from '../cache'
import LuggageTracker from './index'

export const client = new ApolloClient({
  cache,
  connectToDevTools: true
})

const ApolloWrapper = () => (
  <ApolloProvider client={client}>
    <LuggageTracker />
  </ApolloProvider>
)

export default ApolloWrapper
