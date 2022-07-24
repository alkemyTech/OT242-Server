var express = require('express');
var router = express.Router();
const {getNews} = require('../controllers/newsControllers.js');

// Get the news
router.get('/', getNews)

module.exports = router;
