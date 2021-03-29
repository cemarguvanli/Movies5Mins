import axios from 'axios'
import Config from 'react-native-config';

axios.defaults.baseURL = Config.MOVIE_DB_API

const errorHandler = error => {
  if (error.response && error.response.status === 401) {
    console.log('unauthorized')
    return {
      errors: error.response || 'unauthorized',
    }
  }
  return {
    errors: error.response || 'something went wrong',
  }
}

const request = async (uri, { method = 'GET', data, params = {}, headers = {} } = {}) => {
  const res = axios({
    method,
    url: uri,
    data,
    params: {
      api_key: Config.MOVIE_DB_API_KEY,
      ...params,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  })
    .then(response => response)
    .catch(errorHandler);

  return res
}

export default request
