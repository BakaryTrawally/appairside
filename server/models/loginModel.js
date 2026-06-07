const mongoose = require("mongoose")

const { connectLoginDB } = require("../config/dbConnection");

const  loginModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  }
  
})

const loginUsers = connectLoginDB.model("loginBirdStrikeDB", loginModel)

module.exports = loginUsers;