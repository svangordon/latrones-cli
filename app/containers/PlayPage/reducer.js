/*
 *
 * PlayPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_ACTIVE_GAME,
  MATCHMAKING_REQUESTED,
  MATCHMAKING_SUCCESS,
  MATCHMAKING_ERROR,
  GAMES_LIST_REQUESTED,
  GAMES_LIST_SUCCESS,
  GAMES_LIST_ERROR,
  POLL_GAME_REQUESTED,
  POLL_GAME_SUCCESS,
  POLL_GAME_ERROR,
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  activeGame: null,
  loading: false,
  error: false,
  games: [],
});

function playPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_GAME:
      return state
        .set('activeGame', action.activeGame);
    case MATCHMAKING_REQUESTED:
      return state
        .set('loading', true)
        .set('error', false);
    case MATCHMAKING_SUCCESS:
      return state
        .set('loading', false)
        .set('activeGame', action.game);
    case MATCHMAKING_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case GAMES_LIST_REQUESTED:
      return state
        .set('loading', true)
        .set('error', false);
    case GAMES_LIST_SUCCESS:
      return state
        .set('loading', false)
        .set('games', action.games);
    case GAMES_LIST_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case POLL_GAME_REQUESTED:
      return state
        .set('loading', true)
        .set('error', false);
    case POLL_GAME_SUCCESS:
      return state
        .set('loading', false)
        .set('activeGame', action.game);
    case POLL_GAME_ERROR:
      return state
        .set('loading', false)
            .set('error', action.error);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default playPageReducer;
