/**
 * time complexity: O(n)
 * space complexity: O(n)
 * 
 * explanation: use hashmap to store each number's index while scanning the array
 * for each number compute the complement (target - nums[i])
 * if the complement exists in the hashmap return both indices
 * this is a one pass solution to avoid nested loops
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
   const map = new Map();

   for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) return [map.get(complement), i];
      map.set(nums[i], i);
   }
};