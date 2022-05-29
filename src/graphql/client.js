import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

import cache from './cache';

const httpLink = createHttpLink({ uri: 'https://crwn-clothing.com' });

const client = new ApolloClient({
  link: httpLink,
  cache,
});

client.writeData({ data: { cartHidden: true } });

export default client;
