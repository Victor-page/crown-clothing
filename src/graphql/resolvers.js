import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
  setCurrentUser,
  toggleCartHidden,
} from './mutations';

const resolvers = {
  Mutation: {
    addItemToCart,
    toggleCartHidden,
    setCurrentUser,
    clearItemFromCart,
    removeItemFromCart,
  },
};

export default resolvers;
