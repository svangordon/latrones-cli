/*
 *
 * PlayPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Chessdiagram from 'react-chessdiagram';
import makeSelectPlayPage from './selectors';
import messages from './messages';

import BoardWidget from 'components/BoardWidget';
import GameWidget from 'components/GameWidget';
import SocialWidget from 'components/SocialWidget';

export class PlayPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <BoardWidget />
        <GameWidget />
        <SocialWidget />
      </div>
    );
  }
}

PlayPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PlayPage: makeSelectPlayPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
