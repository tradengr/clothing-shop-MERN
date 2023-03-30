import { takeLatest, put, all, call } from 'redux-saga/effects';

import { signInSuccess, signInFailed } from './user.action';
import { USER_ACTION_TYPES } from './user.types';

import { httpGetUser } from '../../apis/backendAPI';

export function* fetchUserAsync() {
  try {
    const user = yield call(httpGetUser);
    if (!user) return;
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, fetchUserAsync);
}

export function* usersSaga() {
  yield all([ call(onCheckUserSession) ]);
}