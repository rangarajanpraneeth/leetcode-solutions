/**
 * easy
 * 
 * time complexity: O(n^2)
 * space complexity: O(n^2)
 * 
 * explanation: each row starts and ends with 1
 * every inner element is a sum of the 2 numbers from the row directly above it
 * 
 * 4/18/2025
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
   let pt = [];
   for (let i = 0; i < numRows; i++) {
      let temp = [1];
      for (let j = 1; j < i; j++) {
         temp[j] = pt[i - 1][j - 1] + pt[i - 1][j];
      }
      if (i > 0) temp.push(1);
      pt.push(temp);
   }
   return pt;
};