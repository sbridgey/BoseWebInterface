var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'https://192.168.0.6:8090',
  /* other custom settings */
});

module.exports = axiosInstance;