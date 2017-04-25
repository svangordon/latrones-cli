import { createSelector } from 'reselect';

/**
 * Direct selector to the screenDimensionSpy state domain
 */
const selectScreenDimensionSpyDomain = () => (state) => state.get('screenDimensionSpy');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ScreenDimensionSpy
 */

const makeSelectScreenDimensionSpy = () => createSelector(
  selectScreenDimensionSpyDomain(),
  (substate) => substate.toJS()
);

export default makeSelectScreenDimensionSpy;
export {
  selectScreenDimensionSpyDomain,
};
