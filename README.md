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
5. git ignore node_modules
6. npm install express-generator -g
7. express --view=pug myapp
8. cd myapp
9. npm install
10. DEBUG=myapp:* npm start # osx, linux
11. set DEBUG=myapp:* & npm start # win, cmd insted of powershell

```
git rm -r –cached .
캐쉬비우기
```