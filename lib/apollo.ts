import { ApolloClient, HttpLink, InMemoryCache, from, NormalizedCacheObject } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: '/api/graphql'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});

export default client;