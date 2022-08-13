const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  usn: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const users = new mongoose.model("users", userSchema);

module.exports = users;
