import { createSelector } from 'reselect';

/**
 * Direct selector to the playPage state domain
 */
const selectPlayPageDomain = () => (state) => state.get('playPage');

/**
 * Other specific selectors
 */
const selectGames = () => (state) => state.get('playPage').get('games');
const makeSelectOpenGames = () => createSelector(
  selectGames(),
  (substate) => substate.toJS().filter((game) => Number(game.status_id) === 1)
);

/**
 * Default selector used by PlayPage
 */

const makeSelectPlayPage = () => createSelector(
  selectPlayPageDomain(),
  (substate) => substate.toJS()
);

// export default makeSelectPlayPage;
export {
  makeSelectOpenGames,
  makeSelectPlayPage,
  selectPlayPageDomain,
};
