var express = require("express");

var app = express();
var router = express.Router();

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

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
httpsServer.listen(ports);

app.use('/layout', router);

router.route('/').get(function(req,resp){
    resp.json(getLayout());
});

function getLayout(){
   const initPos = { 
        "shipTypes": { 
          "carrier": { 
            "size": 5, 
            "count": 1 
          }, 
          "battleship": { 
            "size": 4, 
            "count": 1 
          }, 
          "cruiser": { 
            "size": 3, 
            "count": 1 
          }, 
          "submarine": { 
            "size": 3, 
            "count": 1 
          }, 
          "destroyer": { 
            "size": 2, 
            "count": 2 
          } 
        },"layout": [ 
          { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] }, 
          { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] }, 
          { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] }, 
          { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] }, 
          { "ship": "destroyer", "positions": [[0,0], [1,0]] }, 
          { "ship": "destroyer", "positions": [[0,8], [0,9]] } 
        ] 
    };
    return initPos;
}