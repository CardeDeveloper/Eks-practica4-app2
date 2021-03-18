var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Esta es la aplicación 2' });
});

router.get('/estoyvivo', function(req, res, next) {
  res.send({status:"si estoy vivo"});
});
module.exports = router;
