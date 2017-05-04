/**
*
* MatchmakingTab
*
*/

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
// import styled from 'styled-components';

// import GameHistory from './GameHistory';
// import GameHistory from 'react-chessdiagram/src/GameHistory';

class MatchmakingTab extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  render() {
    return (
      <div>
        <Paper>
          <p>Matchmaking Tab!</p>
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
};

export default MatchmakingTab;
