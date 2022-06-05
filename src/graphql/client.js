import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

import cache from './cache';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import INITIAL_DATA from './initial-data';

const httpLink = createHttpLink({ uri: 'https://crwn-clothing.com' });

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({ data: INITIAL_DATA });

export default client;
