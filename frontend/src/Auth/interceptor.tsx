import axios, { type InternalAxiosRequestConfig } from "axios";
import { ACCESS_TOKEN } from "../Shared/constants";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

// axiosInstance.interceptors.request.use(
//   (config: bany) => {
//     const accessToken = Cookies.get("mastertoken");
//     if (accessToken && config.headers) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     // ✅ Remove double slashes except after protocol (https://)
//     if (config.url) {
//       config.url = config.url.replace(/([^:]\/)\/+/g, "$1");
//     }

//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error)
// );
