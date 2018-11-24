var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/babo', function (req, res) {
    res.send('you babo');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});