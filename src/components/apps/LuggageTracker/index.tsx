import { ApolloClient, ApolloProvider } from '@apollo/client'
import { cache } from './cache'
import App from './container'

const client = new ApolloClient({
  cache,
  connectToDevTools: true
})

export default function LuggageTrackerApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}
