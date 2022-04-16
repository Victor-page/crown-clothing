import { UPDATE_COLLECTIONS } from './shop.types';

const INITIAL_STATE = { collections: null };

const shopReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case UPDATE_COLLECTIONS: {
      return { ...state, collections: payload };
    }
    default: {
      return state;
    }
  }
};

export default shopReducer;
