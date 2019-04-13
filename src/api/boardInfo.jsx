import apiConfig from '../../config/apiConfig';
import axios from 'axios';

// Sends a GET request to the /boardInfo/owned endpoint on the API server
// Requires user's auth token
async function owned(authToken) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/boardInfo/owned`;
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

// Sends a GET request to the /boardInfo/member endpoint on the API server
// Requires user's auth token
async function member(authToken) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/boardInfo/member`;
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

// let jauth = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGFzc3dvcmQiOiIkMmIkMTIkemdaWEE0WHplSFJhbUlKcjRKRFlKLjNramRpTEVweWFVeHNvVjAyMHVjeGs2V0xyTkVJSGEiLCJpYXQiOjE1NTUxMjc3NTR9.jWmdggiOA4L4EKalGtfkTPQdgkRNRwbNgZhrupSN5vM';
// let omauth = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGFzc3dvcmQiOiIkMmIkMTIkemdaWEE0WHplSFJhbUlKcjRKRFlKLjNramRpTEVweWFVeHNvVjAyMHVjeGs2V0xyTkVJSGEiLCJpYXQiOjE1NTUxMjc3NTR9.jWmdggiOA4L4EKalGtfkTPQdgkRNRwbNgZhrupSN5vM';

// owned(omauth).then( (result) => {
//   console.log(result);
//   member(omauth).then( (result) => {
//     console.log(result);
//     member(jauth).then( (result) => {
//       console.log(result);
//     });
//   });
// });


export {
  owned,
  member,
};