/**
 * easy
 * 
 * time complexity: O(log_10 n) for half reverse, O(n) for the idiot approach
 * space complexity: O(1) half reverse, O(n) idiot
 * 
 * 12/5/2025
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
   if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
   let r = 0;
   while (x > r) {
       r = r * 10 + x % 10;
       x = Math.floor(x / 10);
   }
   return x === r || x === Math.floor(r / 10);
   // let rStr = x.toString().split('').reverse().join('');
   // if (Number(rStr) === x) return true;
   // return false;
};