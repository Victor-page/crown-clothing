import {
  SIGN_SUCCESS,
  SIGN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE,
} from './user.types';

const INITIAL_STATE = { currentUser: null, error: null };

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_SUCCESS: {
      return { ...state, currentUser: payload, error: null };
    }

    case SIGN_OUT_SUCCESS: {
      return { ...state, currentUser: null, error: null };
    }

    case SIGN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE: {
      return { ...state, error: payload };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
