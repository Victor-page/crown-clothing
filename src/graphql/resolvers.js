import { gql } from 'apollo-boost';

import { addItemToCart as addToCart, getCartItemCount } from './cart.utils';

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
`;

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const addItemToCart = (_root, _args, _context, _info) => {
  const { item } = _args;
  const { cache } = _context;
  const data = cache.readQuery({ query: GET_CART_ITEMS });
  const { cartItems } = data;
  const newCartItems = addToCart(cartItems, item);
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems) },
  });
  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: { cartItems: newCartItems },
  });

  return newCartItems;
};

const toggleCartHidden = (_root, _args, _context, _info) => {
  const { cache } = _context;
  const data = cache.readQuery({ query: GET_CART_HIDDEN });
  const { cartHidden } = data;

  cache.writeQuery({
    query: GET_CART_HIDDEN,
    data: { cartHidden: !cartHidden },
  });

  return !cartHidden;
};

export const resolvers = {
  Mutation: {
    addItemToCart,
    toggleCartHidden,
  },
};
