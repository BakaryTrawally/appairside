import axios from "axios";

export default axios.create({
  baseURL: "https://appairside-server.onrender.com",
  headers: { "Content-Type": "application/json" },
});


