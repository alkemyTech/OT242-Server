'use strict';
const { expect } = require('chai');
var chai = require('chai');
var chaiHttp = require('chai-http');
let server = require('../app');

chai.use(chaiHttp);

describe('Activities Test', function() {
    var path = "/admin/activities/";

    it('It should return an activity by id', function(done) {
        let Id = 1;
            chai.request(server)
                .get("/admin/activities/" + Id)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('content');
                    response.body.should.have.property('image');
                    response.body.should.have.property('id').eq(Id);
                    done();
            });
    }),
    it('It should NOT FOUND activity', function(done) {
        let Id = 200;
            chai.request(server)
                .get("/admin/activities/" + Id)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.be.a('object');
                    response.body.should.have.property('message').eq('La actividad solicitada no existe');
                    done();
            });
    }),
    it("It should POST an Activity", (done) => {
        const activity = {
            name: 'test', image: "image-test", content: 'test-content'
        };
        chai.request(server)                
            .post("/admin/activities/")
            .send(activity)
            .end((err, response) => {
                response.should.have.status(202);
            done();
            });
    }),
    it("It should NOT POST an Activity", (done) => {
        const activity = {
            name: 'test', image: "image-test"
        };
        chai.request(server)                
            .post("/admin/activities/")
            .send(activity)
            .end((err, response) => {
                response.should.have.status(400);
                response.body.should.be.a('object');
                response.body.should.have.property('errors');
            done();
            });
    }),
    it("It should PATCH an Activity", (done) => {
        let Id = 1;
        const activity = {
            name: 'test', image: "image-test", content: "new content test"
        };
            chai.request(server)
            .patch("/admin/activities/" + Id)
            .send(activity)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('name');
                response.body.should.have.property('content');
            done();
            });
    }),
    it("It should NOT PATCH an Activity", (done) => {
        let Id = 50;
        const activity = {
            name: 'test', image: "image-test", content: "new content test"
        };
            chai.request(server)
            .patch("/admin/activities/" + Id)
            .send(activity)
            .end((err, response) => {
                response.should.have.status(404);
                response.body.should.be.a('object');
                response.body.should.have.property('message').eq('Actividad inexistente');
            done();
            });
    });
});