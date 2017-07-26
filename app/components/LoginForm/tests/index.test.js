import React from 'react';
import { shallow } from 'enzyme';

import { Field } from 'redux-form/immutable';

import LoginForm from '../index';

describe('<LoginForm />', () => {
  it('Expect it to have default initial values', () => {
    const subject = shallow(
      <LoginForm />
    );
    expect(subject.find(Field)).to.have.length(2);
  });

  // it('Expect to have unit tests specified', () => {
  //   expect(true).toEqual(false);
  // });
});
