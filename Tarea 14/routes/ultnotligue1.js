var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ultnotligue1',{
    isLigue1: true
  });
});

module.exports = router;