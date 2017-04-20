/**
*
* RegisterForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Field, reduxForm } from 'redux-form/immutable';

function RegisterForm({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nickname">User Name</label>
        <Field name="nickname" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

RegisterForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

// Decorate the form component
RegisterForm = reduxForm({
  form: 'register', // a unique name for this form
  initialValues: {
    email: "email@example.com",
    password: "password",
    nickname: "doggy"
  },
})(RegisterForm);

export default RegisterForm;
