import {
  GOOGLE_SIGN_START,
  EMAIL_SIGN_START,
  SIGN_FAILURE,
  SIGN_SUCCESS,
  CHECK_USER_SESSION,
  SIGN_OUT_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './user.types';

export const googleSignInStart = () => ({ type: GOOGLE_SIGN_START });
export const emailSignInStart = (email, password) => ({
  type: EMAIL_SIGN_START,
  payload: { email, password },
});

export const signInSuccess = (user) => ({
  type: SIGN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: SIGN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({ type: CHECK_USER_SESSION });

export const signOutStart = () => ({ type: SIGN_OUT_START });
export const signOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });
export const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (email, password, displayName) => ({
  type: SIGN_UP_START,
  payload: { email, password, displayName },
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});
export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});
