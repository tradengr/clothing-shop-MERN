import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpGetCategories } from "../../apis/backendAPI";

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await httpGetCategories();
    const categories = response.data;
    return categories;
  }
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categoriesMap = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    }
  }
});

export const categoriesReducer = categoriesSlice.reducer;