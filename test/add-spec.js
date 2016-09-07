//we are using const to remember that these variables will never change
const chai = require('chai')
const supertest = require('supertest')  //our MODULE requirements, other requires below

const app = require('../app.js') //we're testing our API (app.js) // this is our required FILES

const should = chai.should()           // these are variables that we are creating in this file
const api = supertest(app)

//we're building an express calc, and sending numbers to get result is a POST request
describe('Sending a POST to /api/add', () => {
  describe('should succeed', () => {
    it('in adding two numbers together', (done) => { //(done) is a callback, to test async
      api.post('/api/add')        // could also do   '/api/add/5/2'
      .send({
        num1: 5,
        num2: 2
      })
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)

        res.body.result.should.be.equal(7)

        done()
      })
    })
  })

  // describe('should fail', () => {
  //   it('when nothing is sent in', (done) => {
  //     api.post('/api/add')
  //     .expect(432)    // this is part of supertest, .expect always wants a status code
  //     .end((err, res) => {
  //       if(err) return done(err)
  //
  //       res.body.message.should.be.equal('No data fool')
  //
  //       done() //if you don't put done() here it will hang forever
  //     })
  //   })
  // }) HEY THERE!!! DUDE!  DOOD
})
