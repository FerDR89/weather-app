import axios from "axios";
const BASE_URL = import.meta.env.VITE_OPEN_WEATHER_BASE_URL;

const axiosAPI = axios.create({
  baseURL: BASE_URL,
});

export default axiosAPI;
