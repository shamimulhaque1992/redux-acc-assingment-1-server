const Post = require('../modal/Post')

exports.createPost = async (req, res) => {
  try {
    const createObj = {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      tags: req.body.tags,
    }

    const post = new Post(createObj)
    post.save((error, post) => {
      if (error) return res.status(400).json({ success: false, error: error })
      if (post) {
        return res.status(200).json({
          success: true,
          post,
        })
      }
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

exports.getPost = async (req, res) => {
  try {
    const posts = await Post.find({})
    return res.status(200).json({ success: true, posts: posts })
  } catch (error) {
    return res.status(400).json({ success: false })
  }
}

exports.deletePost = async (req, res) => {
  try {
    const id = req.body.id
    const resonse = await Post.deleteOne({ _id: id })
    if (resonse.deletedCount !== 1) {
      return res.status(400).json({ success: false })
    } else {
      return res.status(200).json({ success: true, id: id })
    }
  } catch (error) {
    return res.status(400).json({ success: false })
  }
}

exports.editPost = async (req, res) => {
  try {
    const id = req.body.id

    await Post.findOneAndUpdate({ _id: id }, req.body.post, function (
      err,
      doc,
    ) {
      if (err) return res.status(400).json({ success: false })
      return res.status(200).json({ success: true, data: doc })
    })
  } catch (error) {}
}

exports.sortPost = async (req, res) => {
  try {
    const type = req.body.type

    if (type === 'First Upload') {
      const posts = await Post.find({}).sort({ createdAt: 1 })
      return res.status(200).json({ success: true, posts: posts })
    } else if (type === 'Last Upload') {
      const posts = await Post.find({}).sort({ createdAt: -1 })
      return res.status(200).json({ success: true, posts: posts })
    }
  } catch (error) {}
}
