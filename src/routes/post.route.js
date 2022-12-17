const express = require('express')
const router = express.Router()
const postControler = require('../controller/post.controller.js')

router
  .route('/posts')
  .get(postControler.getPost)
  .post(postControler.createPost)
  .delete(postControler.deletePost)
  .put(postControler.editPost)

router.route('/sort').post(postControler.sortPost)

module.exports = router
