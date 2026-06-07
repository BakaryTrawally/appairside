const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const loginUserCopy = require("../models/loginModel");

// REGISTER
router.post("/register", async (req, res) => {
  try {
     const { name, email, password } = req.body;
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new loginUserCopy({
      name, 
      email, 
      password: hashedPassword
    });
    const data = await user.save();
    //  console.log(user.password)
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {

 try {
  const { email, password } = req.body;
  const user = await loginUserCopy.findOne({ email });
  if (!user) {
    return res.json({ status: "Error", message: "No record existed" });
  }
  // compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.json({ status: "Error", message: "Incorrect password" });
  }
  res.json({
    status: "Success",
    id: user._id,
    name: user.name,
    email: user.email
  });

   } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Server error"
    });
  }
});

// GET USER
router.get("/user/:id", async (req, res) => {
  const user = await loginUserCopy.findById(req.params.id);
  res.json(user);
});

// UPDATE USER
router.put("/user/:id", async (req, res) => {
  const data = await loginUserCopy.findByIdAndUpdate(
    req.params.id,
    req.body,
  { new: true }
  );
  res.json(data);
});

module.exports = router;
