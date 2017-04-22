import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.get("global").get("user"),
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  authenticatingSelector: state => state.get("global").get("loading"),
  predicate: authData => {
    if (authData !== null && authData !== {}) {
    } else {
    }
    return authData !== null && authData !== {};
  }
});

export const UserIsNotAuthenticated = UserAuthWrapper({
  // Intercepts users who ARE authenticated (ie, makes sure they are not authenticated)
  authSelector: state => state.get("global"),
  authenticatingSelector: state => state.get("global").get("loading"),
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  // Want to redirect the user when they are done loading and authenticated
  predicate: global => {
      // Return true if user is not authenticated
      return (global.get("user") === null || global.get("user") === {});
  },
  // TODO: Change fallthrough redirect
  failureRedirectPath: (state, ownProps) => {return ownProps.location.query.redirect || '/foo'},
  allowRedirectBack: false
})
