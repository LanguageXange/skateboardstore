import { UserActionTypes } from "./user.type";
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

// the param user object is either userAuth or onSnapshot defined in App.js
// action creator is simply function that returns an action object
