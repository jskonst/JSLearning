const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Layout = require('./Layout');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
  let layout = new Layout(10);
  res.send(JSON.stringify(layout.createLayout()));
});

app.listen(8888, function() {
  console.log('App is on and listening on port 8888');
});