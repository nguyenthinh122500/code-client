import axios from 'axios';
export const http = axios.create({
  baseURL: 'https://localhost:7129/api',

});
http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);
