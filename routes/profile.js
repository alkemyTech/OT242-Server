const express = require('express')
const router = express.Router()
const {getAuthProfile} = require('../controllers/profileControllers')

router.get('/me', getAuthProfile)

module.exports = router