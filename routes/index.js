var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next){
	console.log(req.session);
	if(req.session.logined)
		res.render('logout',{session:req.session})
	else{
		res.render('login', {session: req.session})
	}
})

router.post('/login', function(req, res, next) {
	if(req.body.id == 'id' 
		&& req.body.pw === 'pw')
	req.session.regenerate(function(){
		req.session.logined = true;
		req.session.user_id = req.body.id;
		req.render('logout', {session: req.session})
	})
});

router.post('/logout', function(req, res, next) {
	req.session.destroy();
	res.redirect('/login')
});
module.exports = router;
