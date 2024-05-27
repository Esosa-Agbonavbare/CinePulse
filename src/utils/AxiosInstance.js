import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://localhost:7050/api/",
});

export default AxiosInstance;
