import request from 'utils/request';

const baseUrl = `http://localhost:5000/latr/api/v1.0/`

const defaultOptions = {
  // mode: 'no-cors',
  credentials: 'include'
}

const login = (form) => {
  const stemUrl = `login`;
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'post',
      body: form
    }
  );
  return request(baseUrl + stemUrl, options);
};

const refreshToken = () => {
  const stemUrl = `user/0`;
  const options = Object.assign(
    {},
    defaultOptions,
    {method: 'post'}
  );
  return request(baseUrl + stemUrl, options);
}

const register = (form) => {
  const stemUrl = `users`;
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'post',
      body: form
    }
  );
  return request(baseUrl + stemUrl, options);
}

const matchmaking = (gameOptions) => {
  const stemUrl = `games`;
  const options = Object.assign(
    {},
    defaultOptions,
    {
      method: 'post',
    }
  );
  console.log('matchmaking request');
  return request(baseUrl + stemUrl, options);
};

module.exports = {
  login,
  register,
  refreshToken,
  matchmaking
}
