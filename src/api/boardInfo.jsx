import axios from 'axios';
import apiConfig from '../../config/apiConfig';

// Sends a GET request to the /boardInfo/owned endpoint on the API server
// Requires user's auth token
async function owned(authToken) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/boardInfo/owned`;
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    const response = await axios.get(address, settings);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

// Sends a GET request to the /boardInfo/member endpoint on the API server
// Requires user's auth token
async function member(authToken) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/boardInfo/member`;
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    const response = await axios.get(address, settings);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}


export {
  owned,
  member,
};
