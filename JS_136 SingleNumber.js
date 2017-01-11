/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let count = 0
    
    for(let i = 0; i < nums.length; i++) {
        count ^= nums[i]
    }
    
    return count
    
};