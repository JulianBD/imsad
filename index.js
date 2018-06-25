const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cheerup', (req, res) => {
    res.render('cheerup');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('App launched');
});