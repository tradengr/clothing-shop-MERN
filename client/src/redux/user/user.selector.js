import { createSelector } from "reselect"

const userReducer = state => state.user;

export const selectCurrentUser = createSelector(
  [userReducer],
  (user) => user.currentUser
)

export const selectCurrentUserIsLoading = createSelector(
  [userReducer],
  (user) => user.isLoading
)