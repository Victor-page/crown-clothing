import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  CLEAR_CART,
} from './cart.types';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE = { hidden: true, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { cartItems } = state;

  switch (type) {
    case TOGGLE_CART_HIDDEN: {
      return { ...state, hidden: !state.hidden };
    }

    case ADD_ITEM: {
      return { ...state, cartItems: addItemToCart(cartItems, payload) };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(cartItems, payload),
      };
    }

    case CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: cartItems.filter(clearItemFromCart.bind(null, payload)),
      };
    }

    case CLEAR_CART: {
      return { ...state, cartItems: [] };
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
