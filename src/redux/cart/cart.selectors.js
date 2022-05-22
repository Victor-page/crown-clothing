import { createSelector } from 'reselect';

import {
  getCartItemsCount,
  getCartTotalPrice,
} from '../../providers/cart/cart.utils';

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  getCartItemsCount
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  getCartTotalPrice
);
