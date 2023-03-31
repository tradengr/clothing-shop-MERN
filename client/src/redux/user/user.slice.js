// user Slice contains all the
// Reducer, Action, Types

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpGetUser } from "../../apis/backendAPI";

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    const response = await httpGetUser();
    const user = response.data;
    return user;
  }
);

// Returns an object
export const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const userReducer = userSlice.reducer;