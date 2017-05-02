/**
*
* GameWidget
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import GameTab from './GameTab';
import MatchmakingTab from './MatchmakingTab';

// import {Tabs, Tab} from 'material-ui/Tabls';
import {Tabs, Tab} from 'react-draggable-tab';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class GameWidget extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const tabs = [
      (<Tab
        key={'gameTab'}
        title={'Game'}
        disableClose={false}
      >
        <p>Game Tab</p>
      </Tab>),
      (<Tab
        key={'matchmakingTab'}
        title={'Play'}
        disableClose={true}
      >
        <p>Matchmaking Tab</p>
      </Tab>),
    ];
    return (
      <div style={{display: 'inline-block'}}>
        {this.props.activeGame ?
          <GameTab game={activeGame} /> :
          <MatchmakingTab
            requestMatchmaking={this.props.requestMatchmaking}
          />
        }
      </div>
    );
  }
}

GameWidget.propTypes = {
  activeGame: React.PropTypes.object,
  requestMatchmaking: React.PropTypes.func,
};

export default GameWidget;
