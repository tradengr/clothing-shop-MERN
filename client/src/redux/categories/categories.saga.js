import { takeLatest, all, call, put } from 'redux-saga/effects';

import { httpGetCategories } from '../../apis/backendAPI';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(httpGetCategories);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

// accumulator that holds all sagas related to categories
export function* categoriesSaga() {
  yield all([ call(onFetchCategories) ]);
}