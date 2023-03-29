// Selector function extracts data from the entire redux store = state
// state is a one large object

// Selector also updates whenever state obj changes
// export const selectCurrentUser = state => state.user.currentuser; 
export const selectCurrentUser = state => {
  return state.user.currentUser
} 