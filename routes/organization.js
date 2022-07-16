var express = require('express');
var router = express.Router();

const {getOrganizationData } = require('../controllers/organizationControllers')

// Get the organization
router.get('/1/public', getOrganizationData)



module.exports = router;
