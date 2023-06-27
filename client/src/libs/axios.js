import axios from "axios";

const axiosCustom = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default axiosCustom;
