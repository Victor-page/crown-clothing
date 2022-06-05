import {
  addItemToCart as addToCart,
  clearItemFromCart as clearFromCart,
  removeItemFromCart as removeFromCart,
} from './utils/cart.utils';
import { GET_CART_HIDDEN, GET_CART_ITEMS, GET_CURRENT_USER } from './queries';
import updateCartItemsRelatedQueries from './utils/update-cart-items-related-queries';

export const clearItemFromCart = (_root, _args, _context, _info) => {
  const { id } = _args;
  const { cache } = _context;
  const data = cache.readQuery({ query: GET_CART_ITEMS });
  const { cartItems } = data;
  const newCartItems = clearFromCart(cartItems, id);
  updateCartItemsRelatedQueries(cache, newCartItems);

  return newCartItems;
};

export const removeItemFromCart = (_root, _args, _context, _info) => {
  const { id } = _args;
  const { cache } = _context;
  const data = cache.readQuery({ query: GET_CART_ITEMS });
  const { cartItems } = data;
  const newCartItems = removeFromCart(cartItems, id);
  updateCartItemsRelatedQueries(cache, newCartItems);

  return newCartItems;
};

export const setCurrentUser = (_root, _args, _context, _info) => {
  const { user } = _args;
  const { cache } = _context;
  cache.writeQuery({
    query: GET_CURRENT_USER,
    data: { currentUser: user },
  });
};

export const addItemToCart = (_root, _args, _context, _info) => {
  const { item } = _args;
  const { cache } = _context;
  const data = cache.readQuery({ query: GET_CART_ITEMS });
  const { cartItems } = data;
  const newCartItems = addToCart(cartItems, item);
  updateCartItemsRelatedQueries(cache, newCartItems);

  return newCartItems;
};

export const toggleCartHidden = (_root, _args, _context, _info) => {
  const { cache } = _context;
  const data = cache.readQuery({ query: GET_CART_HIDDEN });
  const { cartHidden } = data;

  cache.writeQuery({
    query: GET_CART_HIDDEN,
    data: { cartHidden: !cartHidden },
  });

  return !cartHidden;
};
