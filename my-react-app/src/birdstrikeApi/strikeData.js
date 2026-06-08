// import axios from "axios";

// export default axios.create({
// <<<<<<< HEAD
//   baseURL: "https://appairside-frontend.onrender.com/api",
//   headers: { "Content-Type": "application/json" },
// });


// =======
//   baseURL: "http://localhost:3000/api",
//   headers: { "Content-Type": "application/json" },
// });
// >>>>>>> f4d5fd8 (changed url)

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
