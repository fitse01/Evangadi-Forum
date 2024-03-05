
import axios from "axios";

let BaseUrl = "http://localhost:7000/api";

export const endPoint = {
  LOGIN: `${BaseUrl}/login`,
  SIGNUP: `${BaseUrl}/signup`,
  ME: `${BaseUrl}/me`,
  QUESTION: `${BaseUrl}/questions`
};

export const axiosInstance = axios.create({
  baseURL: BaseUrl,
});


// import axios from "axios";
// let BaseUrl = "http://localhost:7000/api";

// const endPoint ={
//   LOGIN: `${BaseUrl}/login`,
//   SIGNUP:`${BaseUrl}/signup`,
//   ME:`${BaseUrl}/me`,
//   QUESTION:`${BaseUrl}/questions`
// }

// const axiosInstance = axios.create({
//   baseURL: BaseUrl,
// });

// export default { endPoint, axiosInstance };