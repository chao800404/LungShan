import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache: cache,
  uri: process.env.LUNG_SHAN_WP_GRAPHQL,
})
