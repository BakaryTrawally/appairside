import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://appairside-frontend.onrender.com/api"
      : "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
