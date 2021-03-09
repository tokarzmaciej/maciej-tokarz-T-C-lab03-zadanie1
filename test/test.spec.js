const expect = require('chai').expect
const chai = require('chai');
const app = require('../server');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('test_api', () => {
    it('test get', () => {
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.text).to.equal("Hello from my node app!");
            });
    });

    it('test post', () => {
        chai.request(app)
            .post('/')
            .send({ message: "Hello World !!!" })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.text).to.equal("We got Hello World !!!");
            });
    });

    it('test put', () => {
        chai.request(app)
            .put('/')
            .send({ value: "Docker" })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.text).to.equal("New value: Docker");
            });
    });

    it('test delete', () => {
        chai.request(app)
            .delete('/1')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.text).to.equal("Delete position: 1");
            });
    });
})

