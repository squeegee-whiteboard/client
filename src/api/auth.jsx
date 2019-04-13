import apiConfig from '../../config/apiConfig';
import axios from 'axios';

// Sends a request to the /auth/register endpoint on the API server
async function register(email, username, password) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/auth/register`;
    let payload = {
      email,
      username,
      password,
    };

    let response = await axios.post(address, payload);

    responseData = response.data;
  } catch(error) {
    responseData = {
      success: false,
      message: "Error contacting API server.",
    };
  }

  return responseData;
}

// Sends a request to the /auth/login endpoint on the API server
async function login(email, password) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/auth/login`;
    let payload = {
      email,
      password,
    };

    let response = await axios.post(address, payload);

    responseData = response.data;
  } catch(error) {
    responseData = {
      success: false,
      message: "Error contacting API server.",
    };
  }

  return responseData;
}

// register("onemore@joel.com", "aaron", "hunter2").then( (result) => {
//   console.log(result);
//   register("jojo@joel.com", "joel", "hunter2").then( (result) => {
//     console.log(result);
//   });
// });


export {
  register,
  login,
};
