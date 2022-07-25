const express = require("express");
const router = express.Router();
const { getJWT } = require("../middlewares/jwtGenerator");
const { jwtDecoder } = require("../middlewares/jwtDecoder");
// Generar jwt
router.get("/generate", getJWT);
// Enviar el jwt por URL para decodificarlo
router.get("/me/:jwt", jwtDecoder);
module.exports = router;
