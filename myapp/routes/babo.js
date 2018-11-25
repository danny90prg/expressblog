var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/babo', function(req, res, next) {
    res.send('get');
    //res.render('babo', { title: '야호' });
});

router.post('/babo', function(req, res, next) {
    res.render('babo', { title: '야호' });
});
  
router.put('/babo', function(req, res) {
    res.render('babo', { title: '야호' });
});

router.delete('/babo', function(req, res) {
    res.send('delete');
    //res.render('babo', { title: '야호' });
});
module.exports = router;
