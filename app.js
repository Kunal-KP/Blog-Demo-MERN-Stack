var http = require('http');
var express = require('express');
var app = express();
var router = require('./service_layer/router')

app.use(express.static('src'));

app.all('*',router);

app.listen(8000);
console.log('Server started on 8000');