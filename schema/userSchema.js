const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: String,
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
  }
});

const User = mongoose.model("user", user);

module.exports = User;
