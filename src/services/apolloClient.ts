import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3333/',
    cache: new InMemoryCache(),
  });

export default client;