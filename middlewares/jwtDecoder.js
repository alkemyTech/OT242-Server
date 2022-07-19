function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

const jwtDecoder = (req, res, next) => {
  const token = parseJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJNYW51ZWwiLCJsYXN0TmFtZSI6IkJhdXRpc3RhIiwiZW1haWwiOiJtYW51YmF1dGlzdGEyMDA5QGdtYWlsLmNvbSIsImlhdCI6MTY1ODE5NzA5MCwiZXhwIjoxNjU4MTk3NjkwfQ.QVTV-bPTIdgv4F4gE8VlSpFRXyYSHJreWgEd2iuSfgM"
  );
  res.send(token);
};

module.exports = {
  jwtDecoder,
};
