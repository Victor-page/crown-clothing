import { GET_CART_ITEMS, GET_ITEM_COUNT, GET_CART_TOTAL } from '../queries';
import { getCartItemCount, getCartTotal } from './cart.utils';

const updateCartItemsRelatedQueries = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: { cartItems: newCartItems },
  });
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems) },
  });
  cache.writeQuery({
    query: GET_CART_TOTAL,
    data: { cartTotal: getCartTotal(newCartItems) },
  });
};

export default updateCartItemsRelatedQueries;
