const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim : true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    validate: (value) => {
      return value > 0;
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
