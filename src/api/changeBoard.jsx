import axios from 'axios';
import apiConfig from '../../config/apiConfig';

// Sends a POST request to the /changeBoard/create endpoint on the API server
// Requires user's auth token
async function create(authToken, boardName) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeBoard/create`;
    const payload = {
      name: boardName,
    };
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    const response = await axios.post(address, payload, settings);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

// Sends a PATCH request to the /changeBoard/name endpoint on the API server
// Requires user's auth token
async function name(authToken, newName, boardId) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeBoard/name`;
    const payload = {
      name: newName,
      board_id: boardId,
    };
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    console.log(payload);

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

// Sends a DELETE request to the /changeBoard/delete endpoint on the API server
// Requires user's auth token
// Called deleteBoard because delete is in use
async function deleteBoard(authToken, boardId) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeBoard/delete`;
    const payload = {
      board_id: boardId,
    };
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    const response = await axios.post(address, payload, settings);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

// Sends a PUT request to the /changeBoard/addMember endpoint on the API server
// Requires user's auth token
async function addMember(authToken, boardId) {
  let responseData = {};

  try {
    const address = `${apiConfig.URL_SCHEME}://${apiConfig.IP}:${apiConfig.PORT}/changeBoard/addMember`;
    const payload = {
      board_id: boardId,
    };
    const settings = {
      headers: {
        Authorization: authToken,
      },
    };

    const response = await axios.put(address, payload, settings);

    responseData = response.data;
  } catch (error) {
    responseData = {
      success: false,
      message: 'Error contacting API server.',
    };
  }

  return responseData;
}

const changeBoard = {
  create,
  name,
  deleteBoard,
  addMember,
};

export default changeBoard;
