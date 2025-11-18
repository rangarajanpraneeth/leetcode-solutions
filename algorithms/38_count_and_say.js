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