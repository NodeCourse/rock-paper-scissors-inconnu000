const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var randomItem = require('random-item');

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/result', (req, res) => {
    res.render('result');
});

var computer = randomItem(['rock', 'paper', 'scissors']);

app.post('/result', (req, res) => {
    const{ computer, user}  = req.body;
});

app.listen(3000);