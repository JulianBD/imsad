const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cheerup', (req, res) => {
    res.render('cheerup');
});

app.listen(3000, () => {
    console.log('Live at Port 3000');
});