'use strict';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

chai.should();

chai.use(chaiHttp);

describe('News Test', () => {
    var path = "/admin/news/";

    it('should return all news', (done) => {
        chai.request(server)
            .get(path)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });

    it('should return a new by Id', (done) => {
        const newId = 1;
        chai.request(server)
            .get(path + newId)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('name');
                res.body.should.have.property('content');
                res.body.should.have.property('image');
                res.body.should.have.property('categoryId');
                res.body.should.have.property('id').eq(newId);
                done();
            })
    });

    it('It should NOT FOUND a New', (done) => {
        const newId = 200;
        chai.request(server)
            .get(path + newId)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eq('Novedad no existe');
                done();
        });
    }),

    it("It should POST a New", (done) => {
        const newToPost = {
            name: 'new-test', 
            content: 'content-test', 
            image: 'image-test', 
            categoryId: 1
        };
        chai.request(server)                
            .post(path)
            .send(newToPost)
            .end((err, res) => {
                res.should.have.status(202);
                res.body.should.have.property('message').eq('Datos almacenados exitosamente!');
                done();
            });
    }),

    it("It should NOT POST a New - name not defined", (done) => {
        const newToPost = {
            content: 'content-test',
            image: 'image-test', 
            categoryId: 1
        };
        chai.request(server)                
            .post(path)
            .send(newToPost)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                done();
            });
    }),

    it("It should NOT POST a New - Content not defined", (done) => {
        const newToPost = {
            name: 'new-test', 
            image: 'image-test',
            categoryId: 1
        };
        chai.request(server)                
            .post(path)
            .send(newToPost)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                done();
            });
    }),

    it("It should NOT POST a New - categoryId not defined", (done) => {
        const newToPost = {
            name: 'new-test', 
            content: 'content-test',
            image: 'image-test'
        };
        chai.request(server)                
            .post(path)
            .send(newToPost)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                done();
            });
    }),

    it("It should PUT a New", (done) => {
        let newId = 1;
        const newToUpdate = {
            name: 'new-test', 
            content: 'content-test', 
            image: 'image-test', 
            categoryId: 1
        };
        chai.request(server)
            .put(path + newId)
            .send(newToUpdate)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eq('OK novedad actualizada');
                done();
            });
    }),

    it("It should NOT PUT a New", (done) => {
        let newId = 50;
        const newToUpdate = {
            name: 'new-test', 
            content: 'content-test', 
            image: 'image-test', 
            categoryId: 1
        };
        chai.request(server)
            .put(path + newId)
            .send(newToUpdate)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eq('No existe una novedad con este id');
                done();
            });
    }),

    it("It should DELETE a New", (done) => {
        let newId = 1;
        chai.request(server)
            .delete(path + newId)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('msg').eq('Eliminado correctamente');
                done();
            });
    }),

    it("It should NOT DELETE a New", (done) => {
        let newId = 200;
        chai.request(server)
            .delete(path + newId)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('msg').eq('the news does not exist');
                done();
            });
    })


    
});



