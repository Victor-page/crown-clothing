const findExistingCartItem = (cartItemToAdd, cartItem) =>
  cartItem.id === cartItemToAdd.id;

const increaseQuantityByOneToExistingCartItem = (cartItemToAdd, cartItem) =>
  cartItem.id === cartItemToAdd.id
    ? {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      }
    : cartItem;

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    findExistingCartItem.bind(null, cartItemToAdd)
  );

  return existingCartItem
    ? cartItems.map(
        increaseQuantityByOneToExistingCartItem.bind(null, cartItemToAdd)
      )
    : [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
