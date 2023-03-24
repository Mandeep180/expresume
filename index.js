const express = require('express');
const app = express();
const port = 3000;




app.get('/', (req, res) => {
  res.render('index.ejs', {title: 'sdf'});
});
app.get('/contact', (req, res) => {
    res.render('contact.ejs', {title: 'contact'})
  });
  app.get('/kanban', (req, res) => {
    res.render('kanban.ejs', {title: 'kanban'})
  });
  app.get('/resume', (req, res) => {
    res.render('resume.ejs', {title: 'resume'})
  });
  app.get('/worklog', (req, res) => {
    res.render('worklog.ejs', {title: 'worklog'})
  });
  app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs', {title: 'dashboard'})
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.set('view engine', 'ejs');