'use strict';
const { expect } = require('chai');
var chai = require('chai');
var chaiHttp = require('chai-http');
let server = require('../app');

chai.use(chaiHttp);

describe('Test group', function() {
    var path = "/categories/";

    it('It should POST a new category', function(done) {
        chai
            .request(server)
            .post(path)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({name: 'test', description: "description-test"})
            .end((err, response) => {
                response.should.have.status(202);
                response.body.should.be.a('object');
                response.body.should.have.property('message').eq('Datos almacenados exitosamente!');
            done();
            });
    }),
    it('It should NOT POST a new category', function(done) {
        chai
            .request(server)
            .post(path)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({description: "description-test"})
            .end((err, response) => {
                response.should.have.status(400);
                response.body.should.be.a('object');
                response.body.should.have.property('errors');
            done();
            });
    });
});