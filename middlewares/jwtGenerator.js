const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(user) {
  return jwt.sign(user, process.env.SECRET, { expiresIn: "10m" });
}

const user = {
  firstName: "Manuel",
  lastName: "Bautista",
  email: "manubautista2009@gmail.com",
};

const getJWT = (req, res, next) => {
  const accessToken = generateAccessToken(user);

  res.header("authorization", accessToken).json({
    message: "Usuario autenticado",
    token: accessToken,
  });
};

module.exports = { getJWT };
