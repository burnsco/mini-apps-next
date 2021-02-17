import { ApolloClient, ApolloProvider } from "@apollo/client"
import { cache } from "./cache"
import LuggageTracker from "./index"

export const client = new ApolloClient({
  cache,
  connectToDevTools: true
})

const LuggageTrackerContainer = () => (
  <ApolloProvider client={client}>
    <LuggageTracker />
  </ApolloProvider>
)

export default LuggageTrackerContainer
