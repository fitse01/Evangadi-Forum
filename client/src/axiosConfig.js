import axios from 'axios'

const axiosBase = axios.create({
  baseURL :  'https://evangadi-forum-09r8.onrender.com/api'
})
export default axiosBase