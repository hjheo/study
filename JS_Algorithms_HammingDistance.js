/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    let result = 0
    let z = x ^ y
    
    while(z !== 0) {
        result += z & 1;
        z = z >> 1
    }

    return result

};