/* 
    fetches an array from a given source
    checks that the URLS end in .json
    @param {Array} source Array containing urls
    @return {Array} Returns array that only contains json URLS
 */
const cleanArray = source => {
    const jsonURLs = []
    if (typeof source !== 'object') { 
        throw new Error('source needs to be an array')
    }
    if (source.length === 0) return jsonURLs
    source.map(elem => {
        if (elem.includes('.json')) {
            jsonURLs.push(elem)
        }
    })
    return jsonURLs
}

exports.cleanArray = cleanArray
