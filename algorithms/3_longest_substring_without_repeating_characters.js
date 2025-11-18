/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
   let lastIndex = {};

   let start = 0;
   let longest = 0;

   for (let end = 0; end < s.length; end++) {
      let char = s[end];
      if (lastIndex[char] >= start) {
         start = lastIndex[char] + 1;
      }

      lastIndex[char] = end;
      longest = Math.max(longest, end - start + 1);
   }

   return longest;
};