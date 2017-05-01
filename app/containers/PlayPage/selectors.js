import { createSelector } from 'reselect';

/**
 * Direct selector to the playPage state domain
 */
const selectPlayPageDomain = () => (state) => state.get('playPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PlayPage
 */

const makeSelectPlayPage = () => createSelector(
  selectPlayPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPlayPage;
export {
  selectPlayPageDomain,
};
