import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("access_token");
  config.headers.authorization = `${accessToken}`;
  return config;
});

api.interceptors.response.use(function (response) {
  return response;
});

export default api;
