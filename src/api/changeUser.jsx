import axios from 'axios';
import apiConfig from '../../config/apiConfig';

// Sends a PATCH request to the /changeUser/username endpoint on the API server
// Requires user's auth token
async function username(authToken, newUsername) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeUser/username`;
    const payload = {
      username: newUsername,
    };
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    const response = await axios.patch(address, payload, settings);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

// Sends a PATCH request to the /changeUser/email endpoint on the API server
// Requires user's auth token
async function email(authToken, newEmail) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeUser/email`;
    const payload = {
      email: newEmail,
    };
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    const response = await axios.patch(address, payload, settings);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

// Sends a PATCH request to the /changeUser/password endpoint on the API server
// Requires user's auth token
async function password(authToken, oldPassword, newPassword) {
  // console.log("Password function is getting called!");
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeUser/password`;
    const payload = {
      oldPassword,
      newPassword,
    };
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    const response = await axios.patch(address, payload, settings);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

// Sends a GET request to the /changeUser/info endpoint on the API server
// Requires user's auth token
async function info(authToken) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeUser/info`;
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

const changeUser = {
  username,
  email,
  password,
  info,
};

export default changeUser;
