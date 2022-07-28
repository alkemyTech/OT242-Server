var express = require('express');
var router = express.Router();

const {find} = require('../controllers/newController');

router.get('/:id', find);

module.exports = router;
