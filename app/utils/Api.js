import request from 'utils/request';

const baseUrl = `http://localhost:5000/`

const defaultOptions = {
  mode: 'no-cors'
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

const register = (form) => {
  const stemUrl = `register`;
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

module.exports = {
  login,
  register
}
