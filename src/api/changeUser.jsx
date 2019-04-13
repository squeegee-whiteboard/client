import apiConfig from '../../config/apiConfig';
import axios from 'axios';

// Sends a PATCH request to the /changeUser/username endpoint on the API server
// Requires user's auth token
async function username(authToken, newUsername) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeUser/username`;
    let payload = {
      username: newUsername,
    };
    let settings = {
      headers: {
        Authorization: authToken,
      },
    };

    let response = await axios.patch(address, payload, settings);

    responseData = response.data;
  } catch(error) {
    responseData = {
      success: false,
      message: "Error contacting API server.",
    };
  }

  return responseData;
}

// Sends a PATCH request to the /changeUser/email endpoint on the API server
// Requires user's auth token
async function email(authToken, newEmail) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeUser/email`;
    let payload = {
      email: newEmail,
    };
    let settings = {
      headers: {
        Authorization: authToken,
      },
    };

    let response = await axios.patch(address, payload, settings);

    responseData = response.data;
  } catch(error) {
    responseData = {
      success: false,
      message: "Error contacting API server.",
    };
  }

  return responseData;
}

// Sends a PATCH request to the /changeUser/password endpoint on the API server
// Requires user's auth token
async function password(authToken, oldPassword, newPassword) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeUser/password`;
    let payload = {
      oldPassword,
      newPassword,
    };
    let settings = {
      headers: {
        Authorization: authToken,
      },
    };

    let response = await axios.patch(address, payload, settings);

    responseData = response.data;
  } catch(error) {
    responseData = {
      success: false,
      message: "Error contacting API server.",
    };
  }

  return responseData;
}

// Sends a GET request to the /changeUser/info endpoint on the API server
// Requires user's auth token
async function info(authToken) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeUser/info`;
    let settings = {
      headers: {
        Authorization: authToken,
      },
    };

    let response = await axios.get(address, settings);

    responseData = response.data;
  } catch(error) {
    responseData = {
      success: false,
      message: "Error contacting API server.",
    };
  }

  return responseData;
}

// let auth = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGFzc3dvcmQiOiIkMmIkMTIkd1JDdXgxZzQzUkVDN1dvOW5iTkdlZVN4UC90MnhoRkZaSXJFSHhlcG1JVjVXbmdlbXB3SFMiLCJpYXQiOjE1NTUxMTQ5MjJ9.tOznZ4KZD9k3pKOHLpGrjd_ltduuYeeLikkO-1A4BRM';

// info(auth).then( (result) => {
//   console.log(result);
// });


export {
  username,
  email,
  password,
  info,
};