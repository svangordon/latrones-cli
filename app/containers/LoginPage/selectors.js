import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = () => (state) => state.get('loginPage');

/**
 * Other specific selectors
 */
// const selectLoginForm = () => (state) => {console.log('selec fired, ==', state.get('form').get('login'));return state.get('form').values};
// const selectLoginForm = () => createSelector(
//   (state) => state.get('form'),
//   (formState) => formState.get('login'),
// );

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain(),
  // selectLoginForm(),
  (substate) => substate.toJS()
);

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  // selectLoginForm
};
