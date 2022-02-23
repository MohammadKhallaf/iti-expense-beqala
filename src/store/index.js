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

// axios.get('/user/12345')
//   .catch(function (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     }
//     console.log(error.config);
//   });
