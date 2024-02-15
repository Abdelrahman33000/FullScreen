import axios from "axios";
import { API_ENDPOINT } from "../../data";

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
});

const isAxiosError = axios.isAxiosError;

export { isAxiosError };

export default axiosInstance;
