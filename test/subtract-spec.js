const chai = require('chai')
const supertest = require('supertest')

const app = require('../app.js')

const should = chai.should()
const api = supertest(app)

describe("Sending a post to api/subtract", () => {
  describe("Some other sentence hooray", () => {
    it("in subtracting two numbers", (done) => {
      api.post('/api/subtract')
      .send({
        num1 : 8,
        num2: 4
      })
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)

        res.body.result.should.be.equal(4)

        done()
      })
    })
  })
})
