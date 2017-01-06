/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    while(b != 0) {
        let c = a & b
        a = a ^ b
        b = c << 1
    }
    return a
};