export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

// the param user object is either userAuth or onSnapshot defined in App.js
