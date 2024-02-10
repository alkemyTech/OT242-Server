'use strict';
const { expect } = require('chai');
var chai = require('chai');
var chaiHttp = require('chai-http');
let server = require('../app');

chai.use(chaiHttp);

describe('Test group', function () {
    const pathRegister = "/auth/register";

    it('It should POST a new user', function (done) {
        chai
            .request(server)
            .post(pathRegister)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                firstName: "Test",
                lastName: "TESTLASTNAME",
                email: "TEST@EXAMPLE.COM",
                password: "123456789"
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('subject');
                response.body.should.have.property('token');
                done();
            });
    }),

        it('It should NOT POST a new user', function (done) {
            chai
                .request(server)
                .post(pathRegister)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    //All 4 are invalid//
                    firstName: "Test123",
                    lastName: "TESTLASTNAME123",
                    email: "TEST",
                    password: "123"
                })
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    const error = response.body.errors;
                    expect(error[0].msg).eq("El nombre debe contener solo letras");
                    expect(error[1].msg).eq("El apellido debe contener solo letras");
                    expect(error[2].msg).eq("El email debe tener formato válido");
                    expect(error[3].msg).eq("La contraseña debe tener al menos 6 caracteres");
                    response.body.should.have.property('errors').to.be.an("array").to.have.length(4);
                    done();
                });
        });


    const pathLogin = "/auth/login";

    it('It should POST a new login', function (done) {
        chai
            .request(server)
            .post(pathLogin)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                email: "TEST@EXAMPLE.COM",
                password: "123456789"
            })
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('subject');
                response.body.should.have.property('token');
                done();
            });
    }),
        //Wrong email
        it('It should NOT POST a new login', function (done) {
            chai
                .request(server)
                .post(pathLogin)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    email: "NotExisting@example.com",
                    password: "123456789"
                })
                .end((err, response) => {
                    response.should.have.status(403);
                    response.body.should.be.a('object');
                    response.body.should.have.property('ok').eq(false);
                    done();
                });
        }),
        //Wrong password
        it('It should NOT POST a new login', function (done) {
            chai
                .request(server)
                .post(pathLogin)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    email: "TEST@example.com",
                    password: "123456"
                })
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    response.body.should.have.property('ok').eq(false);
                    done();
                });
        });

    let id = 32;
    const pathDelete = "/auth/users/delete/"+id;

    it('It should SOFT DELETE a user', function (done) {
        chai
            .request(server)
            .post(pathDelete)
            .set('content-type', 'application/x-www-form-urlencoded')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('message').eq("El usuario fué eliminado correctamente");
                done();
            });
    }),
    id = 27000;
    it('It should NOT SOFT DELETE a user', function (done) {
        chai
            .request(server)
            .post(pathDelete)
            .set('content-type', 'application/x-www-form-urlencoded')
            .end((err, response) => {
                response.should.have.status(404);
                response.body.should.be.a('object');
                response.body.should.have.property('message').eq("El usuario no fue encontrado");
                done();
            });
    });

}); 