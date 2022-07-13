var express = require('express');
var router = express.Router();

// Get controller function
const {getTestimonials} = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Get the testimonials
router.get('/organizations/1/public', getTestimonials)




module.exports = router;
