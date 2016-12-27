/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    var cnt = nums.length;
    var result = [];
    
    for(var i=1; i<=cnt; i++) {
        if(nums.indexOf(i) == -1) {
            result.push(i);
        }
    }
    return result;
    
};
