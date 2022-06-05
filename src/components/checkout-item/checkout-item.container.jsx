import React from 'react';
import { compose, graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutItem from './checkout-item.component';

const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($id: ID!) {
    clearItemFromCart(id: $id) @client
  }
`;

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($id: ID!) {
    removeItemFromCart(id: $id) @client
  }
`;

const CheckoutItemContainer = ({
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
  ...otherProps
}) => {
  const clearItem = (id) => clearItemFromCart({ variables: { id } });
  const addItem = (item) => addItemToCart({ variables: { item } });
  const removeItem = (id) => removeItemFromCart({ variables: { id } });

  return (
    <CheckoutItem
      {...otherProps}
      clearItem={clearItem}
      addItem={addItem}
      removeItem={removeItem}
    />
  );
};

export default compose(
  graphql(CLEAR_ITEM_FROM_CART, { name: 'clearItemFromCart' }),
  graphql(ADD_ITEM_TO_CART, { name: 'addItemToCart' }),
  graphql(REMOVE_ITEM_FROM_CART, { name: 'removeItemFromCart' })
)(CheckoutItemContainer);
