const express = require('express');
const router = express.Router();
const {rolesList} = require('../../controllers/rolesController');


router.get('/', rolesList);



module.exports = router;