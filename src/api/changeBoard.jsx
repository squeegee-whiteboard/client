import apiConfig from '../../config/apiConfig';
import axios from 'axios';

// Sends a POST request to the /changeBoard/create endpoint on the API server
// Requires user's auth token
async function create(authToken, name) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeBoard/create`;
    let payload = {
      name,
    };
    let settings = {
      headers: {
        Authorization: authToken,
      },
    };

    let response = await axios.post(address, payload, settings);

    responseData = response.data;
  } catch(error) {
    responseData = {
      success: false,
      message: "Error contacting API server.",
    };
  }

  return responseData;
}

// Sends a PATCH request to the /changeBoard/name endpoint on the API server
// Requires user's auth token
async function name(authToken, name, boardId) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeBoard/name`;
    let payload = {
      name,
      board_id: boardId,
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

// Sends a DELETE request to the /changeBoard/delete endpoint on the API server
// Requires user's auth token
// Called deleteBoard because delete is in use
async function deleteBoard(authToken, boardId) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeBoard/delete`;
    let payload = {
      board_id: boardId,
    };
    let settings = {
      headers: {
        Authorization: authToken,
      },
    };

    let response = await axios.post(address, payload, settings);

    responseData = response.data;
  } catch(error) {
    responseData = {
      success: false,
      message: "Error contacting API server.",
    };
  }

  return responseData;
}

// Sends a PUT request to the /changeBoard/addMember endpoint on the API server
// Requires user's auth token
async function addMember(authToken, boardId) {
  let responseData = {};

  try {
    let address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeBoard/addMember`;
    let payload = {
      name,
      board_id: boardId,
    };
    let settings = {
      headers: {
        Authorization: authToken,
      },
    };

    let response = await axios.put(address, payload, settings);

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

// create(omauth, "cool joes board").then( (result1) => {
//   console.log(result1);
//   deleteBoard(omauth, result1.board_id).then((result) => {
//     console.log(result);
//   });
// //   name(omauth, "chill chrops board", result1.board_id).then( (result) => {
// //     console.log(result);
// //     addMember(jauth, result1.board_id).then( (result) => {
// //       console.log(result);
// //     });
// //   });
// });


export {
  create,
  name,
  deleteBoard,
  addMember,
};