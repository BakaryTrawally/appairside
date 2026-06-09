const dotenv = require("dotenv");
dotenv.config(); // MUST BE FIRST

const express = require("express");
const cors = require("cors");
const routesUrl = require("./routes/route");
const loginUrl = require("./routes/login");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routesUrl);
app.use("/api", loginUrl);


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
    console.log("CONNECTION:", process.env.CONNECTION);
});

