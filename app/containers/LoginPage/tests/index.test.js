import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../index';

// describe('<LoginPage />', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(false);
//   });
// });

describe('<LoginPage />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <LoginPage locale="en">
        {children}
      </LoginPage>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
