import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.get("global").get("user"),
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  authenticatingSelector: state => state.get("global").get("loading"),
  predicate: authData => {
    console.log("checking UserIsAuth predicate, authData ==", authData);
    if (authData !== null && authData !== {}) {
      console.log("predicate true, not redirecting");
    } else {
      console.log("predicate false, redirecting");
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
      console.log("IsNotAuth predicate sees user as", global.get("user"), " loading ==", global.get("loading"));
      if ((global.get("user") === null || global.get("user") === {})
        && global.get("loading") === false) {
          console.log("IsNotAuth predicate true, not redirecting");
        } else {
          console.log("IsNotAuth predicate false, redirecting");
          console.log("user ==", global.get("user"), "loading ==", global.get("loading"));
        }
      return (global.get("user") === null || global.get("user") === {})
        && global.get("loading") === false;
  },
  // TODO: Change fallthrough redirect
  failureRedirectPath: (state, ownProps) => {return ownProps.location.query.redirect || '/foo'},
  allowRedirectBack: false
})
