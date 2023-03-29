import { createAction } from "../../utils/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types"
import { httpGetCategories } from "../../apis/backendAPI";

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

export const fetchCategoriesSuccess = (categories) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);
}

export const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}