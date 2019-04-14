import axios from 'axios';
import apiConfig from '../../config/apiConfig';

// Sends a request to the /auth/register endpoint on the API server
async function register(email, username, password) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/auth/register`;
    const payload = {
      email,
      username,
      password,
    };

    const response = await axios.post(address, payload);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

// Sends a request to the /auth/login endpoint on the API server
async function login(email, password) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/auth/login`;
    const payload = {
      email,
      password,
    };

    const response = await axios.post(address, payload);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

const auth = {
  register,
  login,
};

export default auth;
