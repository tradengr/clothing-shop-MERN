import { createAction } from "../../utils/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types"
import { httpGetCategories } from "../../apis/backendAPI";

const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

const fetchCategoriesSuccess = (categories) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);
}

const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}

// Redux-Thunk Middleware: function that returns async function
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const response = await httpGetCategories();
    const categories = response.data;
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
} 