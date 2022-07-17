var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");

/* GET users listing. */
router.post('/', function(req, res, next) {
 
  const user = {
    id: 1,
    name: 'Gonzalo',
    email: 'gonzalo@gonzalo.com',
    password: 1234
};

jwt.sign({user: user}, 'secretKey', (err, token) => {
  res.json({
      subject: String(user.name),
      token: token
  });

});

//res.json(user);

});




module.exports = router;
