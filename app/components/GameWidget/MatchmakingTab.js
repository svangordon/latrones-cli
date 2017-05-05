/**
*
* MatchmakingTab
*
*/

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
// import styled from 'styled-components';

// import GameHistory from './GameHistory';
// import GameHistory from 'react-chessdiagram/src/GameHistory';

class MatchmakingTab extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    // console.log('openGames ==', this.props.openGames);
    return (
      <div>
        <Paper>
          <p>Matchmaking Tab!</p>
          {"Open Games"}
          {this.props.games ? (<div>No games to show</div>) :
          (
            <List>
              {this.props.openGames.map((game, i) => (
                <ListItem key={i} primaryText={game.players[0].nickname} />
              ))}
            </List>
          )}
          <RaisedButton
            label={"Play"}
            primary
            onTouchTap={/*()=>{console.log(this.props);}*/this.props.requestMatchmaking}
          />
        </Paper>
      </div>
    );
  }
}

MatchmakingTab.propTypes = {
  pgn: React.PropTypes.array,
  requestMatchmaking: React.PropTypes.func,
  requestGamesList: React.PropTypes.func,
  openGames: React.PropTypes.array
};

export default MatchmakingTab;
