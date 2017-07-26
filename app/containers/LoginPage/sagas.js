import { call, put, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
// import {
//   USER_LOGIN_REQUESTED,
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_ERROR,
// } from 'containers/App/constants';
import * as Api from 'utils/Api';
import {
  REFRESH_TOKEN_REQUESTED,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from './constants';

// Individual exports for testing
export function* loginUser(action) {
  try {
    // const requestURL = `http://jsonplaceholder.typicode.com/users`;
    // console.log('point1', action)
    const user = yield call(Api.login, action.form);
    // console.log('users', user);
    yield put({ type: USER_LOGIN_SUCCESS, user });
  } catch (e) {
    const message = 'Could not log in.';
    yield put({ type: USER_LOGIN_ERROR, error: message });
  }
}

export function* refreshToken() {
  try {
    console.log('refreshing token');
    const user = yield call(Api.refreshToken);
    console.log('got back', user);
    yield put({ type: REFRESH_TOKEN_SUCCESS, user });
  } catch (e) {
    console.log('refreshToken catch block');
    const message = '';
    yield put({ type: REFRESH_TOKEN_ERROR, error: message });
  }
}

/**
 * Github repos request/response handler
 */
function* userLoginSaga() {
  yield takeLatest(USER_LOGIN_REQUESTED, loginUser);
  yield takeLatest(REFRESH_TOKEN_REQUESTED, refreshToken);
}

// All sagas to be loaded
export default [
  userLoginSaga,
];
