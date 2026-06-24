const mongoose = require("mongoose");

// BirdsStrike db
const connectBirdsStrikeDB = mongoose.createConnection(
  process.env.CONNECTION
);
// login db
const connectLoginDB = mongoose.createConnection(
  process.env.LOGIN_CONNECTION
);

connectBirdsStrikeDB.on("error", (err) =>
  console.error("DB connection error:", err)
);
connectLoginDB.on("error", (err) =>
  console.log("Login DB connected:", err)
);

connectBirdsStrikeDB.on("connected", () =>
  console.log("BirdStrike DB connected")
);
connectLoginDB.on("connected", () =>
   console.log("Login DB connected")
 );



module.exports = {
 connectBirdsStrikeDB,
 connectLoginDB,
};


// module.exports = connectBirdsStrikeDB;