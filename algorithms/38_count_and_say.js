/**
 * medium
 * 
 * time complexity: O(n * k)
 * space complexity: O(k)
 * 
 * explanation: start with 1 the iteratively build the next string by reading off the previous one
 * count consecutive repeated digits and append "count + digit"
 * repeat until reaching the nth term
 * 
 * 4/18/2025
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
   if (n === 1) return '1';

   let res = '1';
   for (let i = 1; i < n; i++) {
      let cur = '';
      let count = 1;

      for (let j = 0; j < res.length; j++) {
         if (j + 1 < res.length && res[j] === res[j + 1]) {
            count++;
         } else {
            cur += count.toString() + res[j];
            count = 1;
         }
      }

      res = cur;
   }
   return res;
};