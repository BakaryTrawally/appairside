import axios from "axios";

export default axios.create({
  baseURL:"https://appairside-frontend.onrender.com/api",
  // baseURL:
  //   process.env.NODE_ENV === "production"
  //     ? "https://appairside-frontend.onrender.com/api"
  //     : "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});


import axios from "axios";
export default axios.create({
    // baseURL:"http://localhost:3001"
    baseURL:"http://localhost:4000/app"  
})