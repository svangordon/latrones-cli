import request from 'utils/request';

const baseUrl = 'http://localhost:5000/latr/api/v1.0/';

const defaultOptions = {
  // mode: 'no-cors',
  credentials: 'include',
};

const login = (form) => {
  const stemUrl = 'login';
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'post',
      body: form,
    }
  );
  return request(baseUrl + stemUrl, options);
};

const refreshToken = () => {
  const stemUrl = 'user/0';
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'post',
    }
  );
  return request(baseUrl + stemUrl, options);
};

const register = (form) => {
  const stemUrl = 'users';
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'post',
      body: form,
    }
  );
  return request(baseUrl + stemUrl, options);
};

const matchmaking = (gameOptions) => {
  console.log('matchmaking request. gameOptions', gameOptions);
  const stemUrl = 'games';
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'post',
    }
  );
  return request(baseUrl + stemUrl, options);
};

const gamesList = () => {
  // console.log('requesting gamesList');
  const stemUrl = 'games';
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'get',
    }
  );
  return request(baseUrl + stemUrl, options);
};

const pollGame = (gameId) => {
  // console.log('polling game');
  const stemUrl = `game/${gameId}`;
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'get',
    }
  );
  return request(baseUrl + stemUrl, options);
};

module.exports = {
  login,
  register,
  refreshToken,
  matchmaking,
  gamesList,
  pollGame,
};
