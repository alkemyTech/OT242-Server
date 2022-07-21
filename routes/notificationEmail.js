var express = require('express');
var router = express.Router();

const notificationEmailController = require('../controllers/notificationEmailController')

router.post('/', notificationEmailController)



module.exports = router;