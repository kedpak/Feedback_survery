const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = express();
const AuthRoutes = require('../routes/authRoutes')(app);

chai.use(chaiHttp);

describe('/get Auth', () => {
  it('should return callback and redirect to surveys', (done) => {
    chai.request(AuthRoutes)
      .get('/auth/google')
      .end((err, res) => {
        chai.expect(res.status).to.have(200);
        done();
      });
  });
});
