'use strict';
const { expect } = require('chai');
var chai = require('chai');
var chaiHttp = require('chai-http');
let server = require('../app');

chai.use(chaiHttp);

describe('Test group', function() {
    it("It should UPDATE a member", (done) => {
        const memberId = 1;
        const member = {
            name: 'test', image: "image-test"
        };
        chai.request(server)                
            .put("/members/" + memberId)
            .send(member)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('name').eq("test");
            done();
            });
    });
    it("It should NOT UPDATE a member", (done) => {
        const memberId = 9;
        const member = {
            name: 'test', image: "image-test"
        };
        chai.request(server)                
            .put("/members/" + memberId)
            .send(member)
            .end((err, response) => {
                response.should.have.status(400);
                response.body.should.be.a('object');
                response.body.should.have.property('message').eq("No existe un miembro con este id");
            done();
            });
    });

}); 
