/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import A from 'components/A';
import {
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
// import { selectLoginForm } from './selectors';
import LoginForm from 'components/LoginForm';
import {
  getFormValues,
  isDirty,
  isPristine,
  isValid,
  isInvalid,
} from 'redux-form/immutable';
import {
  UserIsNotAuthenticated,
} from 'utils/wrappers';

import makeSelectLoginPage from './selectors';
// import messages from './messages';
import { login, refreshToken } from './actions';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.refreshToken();
  }

  render() {
    return (
      <div>
        <LoginForm
          handleSubmit={
            (e) => {
              e.preventDefault();
              this.props.login(new FormData(e.target));
            }
          }
        />
        {this.props.error ? <p>{this.props.error}</p> : null}
        <a>Login with Twitter</a>
        <br />
        <A href="/register">{'Create new user'}</A>
      </div>
    );
  }
}

LoginPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  login: PropTypes.func.isRequired,
  refreshToken: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
  user: makeSelectUser(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  // LoginForm: makeSelectLoginPage
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    login: (form) => { dispatch(login(form)); },
    refreshToken: () => { dispatch(refreshToken()); },
  };
}

// const connectFn = (state) => ({
//   values: getFormValues('login')(state),
//   dirty: isDirty('login')(state),
//   pristine: isPristine('login')(state),
//   valid: isValid('login')(state),
//   invalid: isInvalid('login')(state),
// });

// !!!: Doesn't this (and connectFn) need to return something?
export default UserIsNotAuthenticated(connect((state) => ({
  values: getFormValues('login')(state),
  dirty: isDirty('login')(state),
  pristine: isPristine('login')(state),
  valid: isValid('login')(state),
  invalid: isInvalid('login')(state),
}))(connect(mapStateToProps, mapDispatchToProps)(LoginPage)));
