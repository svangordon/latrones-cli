/**
*
* PlayerCard
*
* A bit of information about a user, incl name, rating, games played
*/

import React from 'react';
import styled from 'styled-components';
import Gravatar from 'react-gravatar';
import md5 from 'md5';

const Nickname = styled.p`
  font-size: 1.5em;
  display: inline;
`;

function PlayerCard({ email, nickname }) {
  return (
    <div>
      <Nickname>
        {nickname}
      </Nickname>
      <Gravatar
        email={email ? md5(email) : md5(nickname)}
      />
    </div>
  );
}

PlayerCard.propTypes = {
  nickname: React.PropTypes.string,
  email: React.PropTypes.string,
};

export default PlayerCard;
