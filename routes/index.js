var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello everyone');
});

router.post('/', (req, res, next) => {
  console.log('kati')
  
})

module.exports = router;
