import { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotalPrice,
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleCartHidden: () => null,
  cartItems: [],
  addItem: () => null,
  removeItem: () => null,
  clearItemFromCart: () => null,
  cartItemsCount: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleCartHidden = () => setHidden((hidden) => !hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (id) => setCartItems(removeItemFromCart(cartItems, id));
  const clearItem = (id) => setCartItems(filterItemFromCart(cartItems, id));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setTotalPrice(getCartTotalPrice(cartItems));
  }, [cartItems]);

  const cartContextValues = {
    hidden,
    cartItemsCount,
    cartItems,
    totalPrice,
    toggleCartHidden,
    addItem,
    removeItem,
    clearItem,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
