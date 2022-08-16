let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('../app');
let server = require('../app');

chai.should();

chai.use(chaiHttp);
/*
describe('GET /news/:id', () => {
        it('should return a new by Id', (done) => {
            const newId = 1;
            chai.request(server)
                .get('/news/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be('json');
                    res.body.lenght.should.be(1);
                    done();
                })
        });
    })
}
*/
describe('Tasks API', () => {
    /**
     * Test the GET (by id) route
     */
    describe('GET /news/:id', () => {
        it("It should GET a new by ID", (done) => {
            let newId = 1;
            chai.request(server)
                .get("/news/" + newId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('content');
                    response.body.should.have.property('image');
                    response.body.should.have.property('categoryId');
                    response.body.should.have.property('type');
                    response.body.should.have.property('id').eq(newId);
                    done();
                });
        });
    });
});