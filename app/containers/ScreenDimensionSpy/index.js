/*
 *
 * ScreenDimensionSpy
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import makeSelectScreenDimensionSpy from './selectors';
import { setScreenDimensions } from './actions';

export class ScreenDimensionSpy extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    console.log("updating dimensions, props ==", this.props);
    this.props.setScreenDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  render() {
    return null;
  }
}

ScreenDimensionSpy.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setScreenDimensions: PropTypes.func.isRequired
};

// const mapStateToProps = createStructuredSelector({
//   ScreenDimensionSpy: makeSelectScreenDimensionSpy(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setScreenDimensions: (dimensions) => dispatch(setScreenDimensions(dimensions)),
  };
}

export default connect(null, mapDispatchToProps)(ScreenDimensionSpy);
