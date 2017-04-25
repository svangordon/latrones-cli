/*
 *
 * Navbar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import makeSelectNavbar from './selectors'; // Should I be bundling these all here...?
import { makeSelectWidth, makeSelectUser, makeSelectRoute } from './selectors';
import messages from './messages';

export class Navbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      collapseDrawer: false
    };
    this._handleCollapseDrawer = this._handleCollapseDrawer.bind(this);

    this.expandedSideNavWidth = 140;
    this.collapsedSideNavWidth = 50;
    this.allowedRoutes = ['/', '/play'];
  }

  _handleCollapseDrawer() {
    this.setState({collapseDrawer: !this.state.collapseDrawer});
  }

  _renderSideNav() {
    return (
      <Drawer open={true}>
        { ["first", "second", "third"].map((item, i) => (<div key={i}>{item}</div>))}
      </Drawer>
    );
  }

  _renderTopNav() {
    return (
      <AppBar />
    );
  }

  render() {
    console.log("header props", this.props);
    if (!this.allowedRoutes.includes(this.props.location)) {
      return null;
    }
    if (this.props.width >= 960) {
      return this._renderSideNav();
    } else {
      return this._renderTopNav();
    }
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
//
// const mapStateToProps = (state, ownProps) => {
//   console.log('ownProps ==', ownProps);
//   return {}
// }

// const makeMapStateToProps = ()
//
const mapStateToProps = createStructuredSelector({
  // Navbar: makeSelectNavbar(),
  user: makeSelectUser(),
  width: makeSelectWidth(),
  // route: makeSelectRoute(),
});

console.log('mapStateToProps', mapStateToProps);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
