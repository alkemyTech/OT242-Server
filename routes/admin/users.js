const express = require('express');
const router = express.Router();
const {usersList} = require('../../controllers/userControllers');


// Get users list 
// Middlewares of authentication and Admin user validation required

router.get('/', usersList);


module.exports = router;