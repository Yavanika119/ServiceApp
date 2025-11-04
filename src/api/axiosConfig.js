import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend-api.com",   // ✅ change to your backend URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
