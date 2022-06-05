const findExistingCartItem = (cartItemToFindId, cartItem) =>
  cartItem.id === cartItemToFindId;

const adjustQuantityByOne = (operator = '+', itemToAdjustId, cartItem) =>
  cartItem.id === itemToAdjustId
    ? {
        ...cartItem,
        quantity:
          operator === '+' ? cartItem.quantity + 1 : cartItem.quantity - 1,
      }
    : cartItem;

const filterItem = (id, cartItem) => id !== cartItem.id;

const calculateCartTotalPrice = (accumalatedPrice, { quantity, price }) =>
  accumalatedPrice + quantity * price;

export const addItemToCart = (cartItems, cartItemToAdd) =>
  cartItems.find(findExistingCartItem.bind(null, cartItemToAdd.id))
    ? cartItems.map(adjustQuantityByOne.bind(null, '+', cartItemToAdd.id))
    : [...cartItems, { ...cartItemToAdd, quantity: 1 }];

export const clearItemFromCart = (cartItems, id) =>
  cartItems.filter(filterItem.bind(null, id));

export const removeItemFromCart = (cartItems, cartItemToRemoveId) => {
  const { id, quantity } = cartItems.find(
    findExistingCartItem.bind(null, cartItemToRemoveId)
  );

  return quantity > 1
    ? cartItems.map(adjustQuantityByOne.bind(null, '-', id))
    : cartItems.filter(filterItem.bind(null, cartItemToRemoveId));
};

export const calculateCartItemsCount = (accumalatedQuantity, { quantity }) =>
  accumalatedQuantity + quantity;

export const getCartTotal = (cartItems) =>
  cartItems.reduce(calculateCartTotalPrice, 0);

export const getCartItemCount = (cartItems) =>
  cartItems.reduce(calculateCartItemsCount, 0);
