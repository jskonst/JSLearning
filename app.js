var express = require("express");

var app = express();

app.use(express.static(__dirname + "/clientApp"));
// Загружаем модуль файловой системы
var fs = require('fs');

var credentials = {
    // key: fs.readFileSync('./tmpSert/key.pem'),
    // cert: fs.readFileSync('./tmpSert/certificate.pem')
  };

const http = require('http');
const https = require('https');

const hostname = '127.0.0.1';
const port = 3000; //80
const ports = 3003; //443

// app.listen(port);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
httpsServer.listen(ports);

app.get('/test', function(req,resp){
    resp.json({'sample':2,'app':'my'});
});

