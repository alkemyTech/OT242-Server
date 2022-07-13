var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/organizations/1/public', (req, res, next) => {

  // Petition test
  const campos = {
    name: 'Tomás',
    img: "img.png",
    phone: '3612536483',
    address: 'san fernando 3522',
    welcomeText: 'welcome to our organization'
  }

  res.json(campos)

})

module.exports = router;
