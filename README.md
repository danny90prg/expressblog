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

``` sh
npm install nodemon -g
```
-> global로 설치해야함

```
nodemon app.js
nodemon app.js localhost 3000
modemon --debug app.js 80
```

```
npm install pm2 -g
pm2 start app.js
pm2 info app
pm2 start app.js --watch
pm2 kill
```
https://blog.outsider.ne.kr/1197

```
npm install express-generator -g
express --view=pug myapp
cd myapp
npm install

DEBUG=myapp:* npm start
```
https://hostpresto.com/community/tutorials/how-to-install-and-use-pm2-for-express-application/

pm2 start./bin/www
-> 설치된 디렉토리에서 실행하면됨
