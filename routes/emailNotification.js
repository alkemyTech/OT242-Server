const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailNotificationController')


/* Send Notification Emails */
router.get('/', emailController);



module.exports = router;