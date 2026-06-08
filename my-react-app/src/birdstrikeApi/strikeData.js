import axios from "axios";

export default axios.create({
  baseURL: "https://appairside-frontend.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});


