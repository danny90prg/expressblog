# expressblog
express for blog

1. npm init
2. npm install express --save
3. vim app.js ->
```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```
4. node app.js