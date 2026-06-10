const dotenv = require("dotenv");
dotenv.config(); // MUST BE FIRST

const express = require("express");
const cors = require("cors");
const routesUrl = require("./routes/route");
const loginUrl = require("./routes/login");

const app = express();

// Middleware
// app.use(cors());


app.use(
  cors({
    origin: [
      "http://localhost:5173", // local React/Vite
      "http://localhost:3000", // local React
      "https://appairside-1.onrender.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routesUrl);
app.use("/api", loginUrl);


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
    console.log("CONNECTION:", process.env.LOGIN_CONNECTION);
});

