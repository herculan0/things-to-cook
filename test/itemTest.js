// process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Item = require('../models/itemModel');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'http://localhost:8080'
const should = chai.should();


chai.use(chaiHttp);
chai.use(require('chai-json-schema'))
describe('/GET statusCode 200', () => {
  it('it should get statusCode 200', (done) => {
    chai.request(server).get('/items').end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});
describe('/GET item', () => {
  it('it should get all items', (done) => {
    chai.request(server).get('/items').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      done();
    });
  });
});
