var express = require('express');
var router = express.Router();
const app = express();


app.use(express.urlencoded({
  extended: true
}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express get' });
});

router.post('/', function(req, res, next) {
  res.render('schedule', { name: req.body.name });
});

module.exports = router;
