const expect = require('chai').expect
const cleanArray = require('../src/cleanArray').cleanArray


describe('cleanArray', () => {
    it('throws exception if @param: source is not of correct type', () => {
        expect(() => {
            cleanArray('foo')
        }).to.throw('source needs to be an array')
    })
    
    it('returns an empty array if @param: source length is 0', () => {
        expect(cleanArray([])).to.eql([])
    })

    it('removes any urls that do not end in .json', () => {
        const urls = [
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json'
        ]
        const fn = cleanArray(urls)
        expect(fn).to.have.lengthOf(1)
        expect(fn).to.eql([urls[1]])
    })

})
