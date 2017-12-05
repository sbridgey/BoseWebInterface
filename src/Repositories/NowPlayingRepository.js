var axios = require('axios');

module.exports = function (baseUrl) {
  return {
    data() {
      return {
        axiosInstance = axios.create({
          baseURL: 'http://192.168.0.6:8090',
        }),
        nowPlaying: [],
        errors: []
      }
    },

    // Fetches posts when the component is created.
    nowPlaying() {
      axiosInstance.get(`/nowPlaying`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.nowPlaying = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
