/*
 *
 * PlayPage actions
 *
 */

// TODO: Upon further reflection, I think that the success / failure actions are
// unnecessary. There dispatched i nthe saga and caught in the reducer

import {
  DEFAULT_ACTION,
  MATCHMAKING_REQUESTED,
  MATCHMAKING_SUCCESS,
  MATCHMAKING_ERROR,
  GAMES_LIST_REQUESTED,
  GAMES_LIST_SUCCESS,
  GAMES_LIST_ERROR,
  POLL_GAME_REQUESTED,
} from './constants';

export function matchmakingRequested() {
  console.log("matchmakingRequested");
  return {
    type: MATCHMAKING_REQUESTED

  }
}

export function matchmakingSuccess(game) {
  return {
    type: MATCHMAKING_SUCCESS,
    game
  }
}

export function matchmakingError(error) {
  return {
    type: MATCHMAKING_ERROR,
    error
  }
}

export function gamesListRequested() {
  return {
    type: GAMES_LIST_REQUESTED

  }
}

export function gamesListSuccess(games) {
  return {
    type: GAMES_LIST_SUCCESS,
    games
  }
}

export function gamesListError(error) {
  return {
    type: GAMES_LIST_ERROR,
    error
  }
}

export function pollGame(gameId) {
  return {
    type: POLL_GAME_REQUESTED,
    gameId
  }
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
