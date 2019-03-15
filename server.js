'use strict';

var express = require('express');
var path = require('path');
//var assert = require('assert');
//var expect = require('chai').expect;
//var request = require('supertest');
var app = express();
var port = process.env.PORT || 3000;
var router = require('./routes/controller');

app.use(express.json());
app.use(router);
app.listen(port, function () {
  return console.log('Listening on port ' + port);
});