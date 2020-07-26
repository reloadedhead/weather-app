import axios, { AxiosRequestConfig } from 'axios';

const requestHandler = (config: AxiosRequestConfig) => {
  config.baseURL = process.env.REACT_APP_API_URL || 'https://api.openweathermap.org/data/2.5';
  config.params = {
    appid: '78e940654ec122d74ca72e5d8002acc1',
    units: 'metric',
    lang: 'es',
    ...config.params,
  };
  return config;
};

const axiosConfig = () => {
  axios.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
  );
  axios.interceptors.request.use(requestHandler, error => Promise.reject(error));
};

export default axiosConfig;
