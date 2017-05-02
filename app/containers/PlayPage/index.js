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

import BoardWidget from 'components/BoardWidget';
import GameWidget from 'components/GameWidget';
import SocialWidget from 'components/SocialWidget';

import { matchmakingRequested } from './actions';
import makeSelectPlayPage from './selectors';
import messages from './messages';

export class PlayPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <BoardWidget />
        <GameWidget
          requestMatchmaking={this.props.requestMatchmaking}
        />
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
    requestMatchmaking: (options) => {console.log('prop fired');dispatch(requestMatchmaking(options))},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);
