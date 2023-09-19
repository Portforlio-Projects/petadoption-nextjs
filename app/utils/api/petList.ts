import axios from "axios";
import fetchAccessToken from "./fetchAccessToken";

const API_URL = "https://api.petfinder.com/v2/";

const petfinder = axios.create({
  baseURL: API_URL,
});

// Add an interceptor to set the access token in the request headers
petfinder.interceptors.request.use(async (config) => {
  const accessToken = await fetchAccessToken();
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default petfinder;
