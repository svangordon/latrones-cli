/*
 *
 * RegisterPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import {
  UserIsNotAuthenticated,
} from 'utils/wrappers';
import RegisterForm from 'components/RegisterForm';

import makeSelectRegisterPage from './selectors';
// import messages from './messages';
import { register } from './actions';

export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <RegisterForm
          handleSubmit={
            (e) => {
              e.preventDefault();
              this.props.register(new FormData(e.target));
            }
          }
        />
        {this.props.error ? <p>{this.props.error}</p> : null}
      </div>
    );
  }
}

RegisterPage.propTypes = {
  error: PropTypes.string,
  register: PropTypes.func,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RegisterPage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    register: (form) => { dispatch(register(form)); },
  };
}

export default UserIsNotAuthenticated(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));
