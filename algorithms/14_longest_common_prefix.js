/**
 * easy
 * 
 * time complexity: O(n * m)
 * space complexity: O(1)
 * 
 * explanation: assume first string is prefix
 * compare it with each remaining string
 * while a string doesnt start with that prefix, trim the prefix
 * stop early if prefix becomes empty
 * 
 * 11/25/2025
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
   if (!strs.length) return '';
   let prefix = strs[0];
   for (let i = 1; i < strs.length; i++) {
      while (!strs[i].startsWith(prefix)) {
         prefix = prefix.slice(0, -1);
         if (!prefix) return '';
      }
   }
   return prefix;
};