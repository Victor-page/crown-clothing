import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from './cart.types';

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });

export const clearItemFromCart = (id) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: id,
});

export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id });
