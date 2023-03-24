var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

app.set('view engine', 'ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/contact', (req, res) => {
  res.render('Contact Page')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});




module.exports = router;
