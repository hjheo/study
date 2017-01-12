/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    if(num < 10) {
        return num
    } else {
        return num % 9 || 9
    }
    
};