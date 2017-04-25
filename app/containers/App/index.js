/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Navbar from 'containers/Navbar';
import ScreenDimensionSpy from 'containers/ScreenDimensionSpy';
import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  // console.log('App props ==', props.location);
  return (
    <AppWrapper>
      <ScreenDimensionSpy />
      <Navbar location={props.location}/>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      {React.Children.toArray(props.children)}
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  dimensions: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  height: (state) => state.get('screen').get('height'),
  width: (state) => state.get('screen').get('width'),
});

export default connect(mapStateToProps)(withProgressBar(App));

// export default UserIsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(HomePage));
