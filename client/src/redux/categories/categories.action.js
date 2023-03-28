import { createAction } from "../../utils/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types"

export const setCategoriesMap = (categories) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categories);
}