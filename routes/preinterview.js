var express = require('express');
var router = express.Router();

/* GET home page. 
   localhost:8080/preinterview
*/
router.get('/', function(req, res, next) { 
  res.send({ title: 'Expresssss' });
});
router.post('/', function(req, res, next) { 
    res.send({ title: 'Expresssss' });
});

module.exports = router;