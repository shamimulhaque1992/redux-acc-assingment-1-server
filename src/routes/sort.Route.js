const express = require('express')
const router = express.Router()
const postControler = require('../controller/post.controller.js')

router.route('/sort').post(postControler.sortPost)

module.exports = router
