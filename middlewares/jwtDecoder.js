function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

const jwtDecoder = (req, res, next) => {
  const token = parseJwt(req.params.jwt);
  res.send(token);
};

module.exports = {
  jwtDecoder,
};
