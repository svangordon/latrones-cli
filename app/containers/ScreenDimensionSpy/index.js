/*
 *
 * ScreenDimensionSpy
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setScreenDimensions } from './actions';

export class ScreenDimensionSpy extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // constructor(props) {
  //   super(props);
  //   // this.updateDimensions();
  //   // this.state = {
  //   //   height: window.innerHeight,
  //   //   width: window.innerWidth
  //   // };
  // }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setScreenDimensions: (dimensions) => dispatch(setScreenDimensions(dimensions)),
  };
}

export default connect(null, mapDispatchToProps)(ScreenDimensionSpy);
