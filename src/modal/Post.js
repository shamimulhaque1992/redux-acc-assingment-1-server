const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const postSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    author: { type: String },
    tags: { type: String },
  },
  { timestamps: true },
)
const Post = mongoose.model('Post', postSchema)

module.exports = Post
