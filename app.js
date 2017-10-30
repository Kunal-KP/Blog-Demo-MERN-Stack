var http = require('http');
var express = require('express');
var app = express();
var router = require('./service_layer/router')

app.use(express.static('src'));

app.all('*',router);

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Server started on 8000');