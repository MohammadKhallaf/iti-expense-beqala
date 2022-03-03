import axios from "axios";
const SERVER_URL = "http://127.0.0.1:8000/";

// this should be set for default authorization :::
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// see cancel token at: https://github.com/axios/axios#cancellation

// create an instance to use the api calls
export const backendAPI = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

/*<=={ Handling errors }==>*/
