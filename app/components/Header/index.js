import React from 'react';
import { FormattedMessage } from 'react-intl';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

// This has been unplugged, and replaced with a container of the same type
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      collapseDrawer: false
    };
    this._handleCollapseDrawer = this._handleCollapseDrawer.bind(this);

    this.expandedSideNavWidth = 140;
    this.collapsedSideNavWidth = 50;
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
    if (this.props.width >= 960) {
      return this._renderSideNav();
    } else {
      return this._renderTopNav();
    }
    // return (
    //   <div>
    //     <Drawer open={true}>
    //     </Drawer>
    //   </div>
    // );
  }
}
/* Use for reference and then delete 4/25
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Drawer open={true} />
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}
*/

export default Header;
