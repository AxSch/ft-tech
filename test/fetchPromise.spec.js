const expect = require('chai').expect
const chai = require('chai')
// const chaiPromise = require('chai-as-promised')
// chai.use(chaiPromise)
const sinon = require('sinon')
const iterateURLs = require('../src/fetchPromise').iterateURLs
const returnPromiseValues = require('../src/fetchPromise').returnPromiseValues



describe('fetchPromise - iterateURLs', () => {
    it('returns an array of promises', () => {
        const urls = [
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json'
        ]
        const spy = sinon.spy(iterateURLs)
        const result = spy(urls)
        
        expect(spy.calledOnce).to.be.true
        expect(spy.returnValues).to.have.lengthOf(1)
        // const promise = new Promise(() => {})
        // expect(result).to.deep.equal([promise]) - AssertionError: expected [ {} ] to deeply equal [ {} ]
        // - not too sure how to go about testing the promise response 
    })

    it('throws an error if the @param: source is of incorrect type', () => {
        const urls = 'helloo'
        const spy = sinon.spy(iterateURLs)
        const result = spy(urls)
        
        expect(spy.threw('Error'))
        expect(spy.calledOnce).to.be.true
        
    })

    xit('throws an error if the promise is rejected', () => {
        const urls = [
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json'
        ]
        const spy = sinon.spy(iterateURLs)
        const result = spy(urls)
        
        expect(spy.calledOnce).to.be.true
        expect(spy.returnValues).to.be.rejected
    })
})

describe('fetchPromise - returnPromiseValues', () => {
    it('returns the values of each promise in the array', () => {
        const promise = new Promise(() => {})
        const promiseArray = [promise, promise]
        const spy = sinon.spy(returnPromiseValues)
        
        spy(promiseArray)
        expect(spy.calledOnce).to.be.true
        expect(spy.returnValues).to.have.lengthOf(1)
    })

    it('throws an error if the promise is rejected', () => {
        const promise = Promise.reject(new Error('Error'))
        const promiseArray = [promise]
        const spy = sinon.spy(returnPromiseValues)
        
        spy(promiseArray)
        expect(spy.calledOnce).to.be.true
        expect(spy.threw('Error'))
        expect(spy.returnValues).to.have.lengthOf(1)
    })
})
