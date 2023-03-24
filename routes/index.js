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
app.get('/dashboard', (req, res) => {
  res.render('dashboard Page')
});
app.get('/kanban', (req, res) => {
  res.render('kanban Page')
});
app.get('/worklog', (req, res) => {
  res.render('worklog Page')
});
app.get('/resume', (req, res) => {
  res.render('resume Page')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});




module.exports = router;
