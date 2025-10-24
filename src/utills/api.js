import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/", // no leading space
  withCredentials: true,                   // ✅ correct key for cookies
});

export default api;
