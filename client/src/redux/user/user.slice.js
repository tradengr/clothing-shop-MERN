// user Slice contains all the
// Reducer, Action, Types

import { createSlice } from "@reduxjs/toolkit";

const USER_INITIAL_STATE = {
  currentUser: null,
}

// Returns an object
export const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    // reads like mutable code but under the hood maintains the immutablity by creating a new obj.
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
