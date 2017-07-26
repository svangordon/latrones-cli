/**
*
* GameWidget
*
*/

import React from 'react';
// import styled from 'styled-components';

// import {Tabs, Tab} from 'material-ui/Tabls';
// import { Tabs, Tab } from 'react-draggable-tab';

import GameTab from './GameTab';
import MatchmakingTab from './MatchmakingTab';


// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };

class GameWidget extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // componentWillMount() {
  //   this.props.requestGamesList()
  // }

  render() {
    // const tabs = [
    //   (<Tab
    //     key={'gameTab'}
    //     title={'Game'}
    //     disableClose={false}
    //   >
    //     <p>Game Tab</p>
    //   </Tab>),
    //   (<Tab
    //     disableClose
    //     key={'matchmakingTab'}
    //     title={'Play'}
    //   >
    //     <p>Matchmaking Tab</p>
    //   </Tab>),
    // ];
    return (
      <div style={{ display: 'inline-block' }}>
        {this.props.game ?
          <GameTab game={this.props.game} /> :
          <MatchmakingTab
            requestMatchmaking={this.props.requestMatchmaking}
            openGames={this.props.games.filter((game) => Number(game.status_id) === 1)}
          />
        }
      </div>
    );
  }
}

GameWidget.propTypes = {
  game: React.PropTypes.object,
  requestMatchmaking: React.PropTypes.func,
  games: React.PropTypes.array,
};

export default GameWidget;
