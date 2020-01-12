const axios = require('axios')
/* 
    returns an Array of promises from each element in the array
    @param {Array} source Array containing urls
    @return {Array} Returns an array, with a promise as elements
 */

//  1. loop through the source of urls
//  2. for each url make a request
//  3. store the data as a Promise
//  4. return as an Array of Promises

const iterateURLs = source => {
    let res
    try {
        return source.map(async url => {
            res = await axios.get(url)
            // to see each response
            // console.log(res.data.data.items.map(data => data))
            return res.data.data.items.map(data => data)
        })
    } catch(error) {
        console.log('Error', error)
        //  could use a logger here instead of // console.logging the error
    }
}

/* 
    returns the values of the Array of promises
    @param {Array} source Array containing promises
    @return {Array} Returns a Promise containing the values
 */

//  1. Pass the array of promises
//  2. Utilize Promise.all()
//  4. return the array of values

const returnPromiseValues = async promiseArr => {
    try {
        let valArray = await Promise.all(promiseArr)
        // to see values in the array
        // console.log(valArray)
        return valArray
    } catch(error) {
        console.log('Error', error)
        //  could use a logger here instead of // console.logging the error
    }
}

exports.iterateURLs = iterateURLs
exports.returnPromiseValues = returnPromiseValues
