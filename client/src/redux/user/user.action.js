import UserActionTypes from "./user.type";

// the param user object is either userAuth or onSnapshot defined in App.js
// action creator is simply function that returns an action object

//MOVE THE SIGN IN PROCESS TO SAGAS!

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const SigninSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SigninFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

// ADDING PERSISTENCE FOR USER SIGN IN SESSION
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

// update sign out used in header.component

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (err) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  paylod: err,
});

// move the sign up to sagas (see sign-up component.jsx)

export const signUpStart = (userInfo) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userInfo,
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});
export const signUpFailure = (err) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: err,
});
