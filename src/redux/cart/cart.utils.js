const findExistingCartItem = (cartItemToAdd, cartItem) =>
  cartItem.id === cartItemToAdd.id;

const increaseQuantityByOneToExistingCartItem = (cartItemToAdd, cartItem) =>
  cartItem.id === cartItemToAdd.id
    ? {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      }
    : cartItem;

export const addItemToCart = (cartItems, cartItemToAdd) =>
  cartItems.find(findExistingCartItem.bind(null, cartItemToAdd))
    ? cartItems.map(
        increaseQuantityByOneToExistingCartItem.bind(null, cartItemToAdd)
      )
    : [...cartItems, { ...cartItemToAdd, quantity: 1 }];

export const calculateCartItemsCount = (accumalatedQuantity, { quantity }) =>
  accumalatedQuantity + quantity;

export const calculateCartTotalPrice = (
  accumalatedPrice,
  { quantity, price }
) => accumalatedPrice + quantity * price;
