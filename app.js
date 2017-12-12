const express = require('express');
const app = express();
app.use(express.static('public'));
app.locals.pretty = true;

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/views', (req,res) => {
  res.render('temp', {
    time: Date(),
    mytitle: 'This is my title'
  });
});

app.get('/', (req,res) => {
  res.send('Hello home page');
});

app.get('/image', (req,res) => {
  res.send('<marquee>This page will show image </marquee>');
});

app.get('/topic' , (req, res) => {
  var topics = [
    'javascript is...',
    'nodejs is...',
    'expressjs is...'
  ];

  var str = `
    <a href="/topic?id=0">Javascript</a> <br>
    <a href="/topic?id=1">Nodejs</a> <br>
    <a href="/topic?id=2">Expressjs</a><br>
  `;
  var output = str + topics[req.query.id];
  res.send(output);

});

app.get('/route', (req, res) => {
  var time = Date();
  res.send(`Hellor Router, <img src="/route.jpg">
    
    <br>
    ${time}`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
