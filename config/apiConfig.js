// Values used to contact the API server
export default {
    URL_SCHEME: process.env.SCHEME || 'http',
    IP: process.env.API_IP || 'localhost',
    PORT: process.env.API_PORT || '3000',
  };