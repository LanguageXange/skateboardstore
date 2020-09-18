import { createSelector } from "reselect";

const UserSelector = (state) => state.user;

export const CurrentUserSelector = createSelector(
  UserSelector,
  (user) => user.currentUser
);
