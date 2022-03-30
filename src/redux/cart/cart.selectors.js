import { createSelector } from 'reselect';

import { calculateCartItemsCount } from './cart.utils';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(calculateCartItemsCount, 0)
);
