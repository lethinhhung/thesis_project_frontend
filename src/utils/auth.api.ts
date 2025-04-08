import axios from "./axios.custiomize";

const registerAPI = (username: string, password: string, email: string) => {
  const URL_API = "/api/auth/register";
  return axios.post(URL_API, { username, password, email });
};

const loginAPI = (username: string, password: string) => {
  const URL_API = "/api/auth/login";
  return axios.post(URL_API, { username, password });
};

export { registerAPI, loginAPI };
