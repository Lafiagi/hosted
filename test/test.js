"use strict";

var chai = require('chai');

var assert = require("chai").assert;

var chaiHttp = require('chai-http');

var should = chai.should();

var app = require('../server.js');

chai.use(chaiHttp);
describe('Messages', function () {
  it('should list ALL messages', function (done) {
    chai.request('http://localhost:3000').get('/api/v1/messages').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});