var cleanArray = require('./src/cleanArray').cleanArray
var iterateURLs = require('./src/fetchPromise').iterateURLs
var returnPromiseValues = require('./src/fetchPromise').returnPromiseValues

const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];


const returnPromiseArray = urls => {
    const jsonURLs = cleanArray(urls)
    const promiseArray = iterateURLs(jsonURLs)
    const valuesArray = returnPromiseValues(promiseArray)
    return {
        'arrayOfPromises': promiseArray,
        'values': valuesArray
    }
}

const returnObj = returnPromiseArray(urls)
console.log(returnObj)

exports.returnPromiseArray = returnPromiseArray