const mongoose = require("mongoose");

const post = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
});

const Post = new mongoose.model("post", post);

module.exports = Post;
