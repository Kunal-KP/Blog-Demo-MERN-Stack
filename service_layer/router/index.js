var express = require('express');
var router = express.Router();
var path = require('path');
var services = require('../services')


router.get('/blog-posts', services.blogPosts);
router.get('/popular-blog-posts', services.popularBlogPosts);
module.exports = router;