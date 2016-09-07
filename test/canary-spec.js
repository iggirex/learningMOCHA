const chai = require('chai')

const should = chai.should()

const expect = chai.expect   //adding expect to our doc

const assert = chai.assert   // adding assert to our available commands

describe('Canary test', () => {
  it('the string hello should be hello', () => {
    const hello = 'hello'

    hello.should.be.equal('hello')  //expecting var hello to = 'hello'
  })

  it('typeof string should be a string', () => {
    const str = "heythurrr"

    str.should.be.a('string')

    expect(str).to.be.a('string')    // a diff way to do this with expect

    assert.typeOf(str, 'string')
  })
})
