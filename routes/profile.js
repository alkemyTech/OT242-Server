const express = require('express')
const router = express.Router()
const {getJWT} = require('../middlewares/jwtGenerator')
const { jwtDecoder } = require('../middlewares/jwtDecoder')

router.get('/generate', getJWT)
router.get('/me', jwtDecoder)
module.exports = router