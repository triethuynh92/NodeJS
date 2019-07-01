
var request = require('supertest');
var express = require('express');
 
var app = require('../app');
 
describe('Index Page', function() {
  it("renders successfully", function(done) {
    request(app).get('/').expect(200, done);    
  })
})

describe('Test API', function() {
  it("returns data successfully", function(done) {
    request(app).get('/api/products').expect(200).expect('Content-Length', '5421').expect('Content-Type', /json/, done); ;    
  })
})
