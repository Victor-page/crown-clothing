import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

import cache from './cache';
import { resolvers, typeDefs } from './resolvers';

const httpLink = createHttpLink({ uri: 'https://crwn-clothing.com' });

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({ data: { cartHidden: true, cartItems: [], itemCount: 0 } });

export default client;
