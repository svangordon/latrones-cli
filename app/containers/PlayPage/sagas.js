import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
// import {
//   USER_LOGIN_REQUESTED,
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_ERROR,
// } from 'containers/App/constants';
import {
  matchmakingSuccess,
  matchmakingError ,
} from './actions';
import {
  MATCHMAKING_REQUESTED,
  MATCHMAKING_SUCCESS,
  MATCHMAKING_ERROR,
  GAMES_LIST_REQUESTED,
  GAMES_LIST_SUCCESS,
  GAMES_LIST_ERROR,
} from './constants';
import * as Api from 'utils/Api';

// Individual exports for testing
export function* matchmaking(action) {
  try {
    // const requestURL = `http://jsonplaceholder.typicode.com/users`;
    // console.log('point1', action)
    const game = yield call(Api.matchmaking, action.options);
    yield put({type: MATCHMAKING_SUCCESS, game});
  } catch (e) {
    const message = "Could not find game.";
    yield put({type: MATCHMAKING_ERROR, error: message});
  }
}

export function* gamesList(action) {
  try {
    // const requestURL = `http://jsonplaceholder.typicode.com/users`;
    // console.log('point1', action)
    const games = yield call(Api.gamesList);
    yield put({type: GAMES_LIST_SUCCESS, games});
  } catch (e) {
    const message = "Could not get games.";
    yield put({type: GAMES_LIST_ERROR, error: message});
  }
}

export function* pollGame(action) {
  try {
    // const requestURL = `http://jsonplaceholder.typicode.com/users`;
    // console.log('point1', action)
    const game = yield call(Api.pollGame, action.gameId);
    yield put({type: POLL_GAME_SUCCESS, game});
  } catch (e) {
    const message = "Could not find game.";
    yield put({type: POLL_GAME_ERROR, error: message});
  }
}

// export function* refreshToken(action) {
//   try {
//     console.log("refreshing token");
//     const user = yield call(Api.refreshToken);
//     console.log("got back", user);
//     yield put({type: REFRESH_TOKEN_SUCCESS, user: user});
//   } catch (e) {
//     console.log("refreshToken catch block");
//     const message="";
//     yield put({type: REFRESH_TOKEN_ERROR, error: message});
//   }
// }

/**
 * Github repos request/response handler
 */
 function* matchmakingSaga() {
  yield takeLatest(MATCHMAKING_REQUESTED, matchmaking);
  yield takeLatest(GAMES_LIST_REQUESTED, gamesList);
  //  yield takeLatest(REFRESH_TOKEN_REQUESTED, refreshToken);
 }

// All sagas to be loaded
export default [
  matchmakingSaga,
];
