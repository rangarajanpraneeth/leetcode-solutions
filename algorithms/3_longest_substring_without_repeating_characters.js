/**
 * time complexity: O(n)
 * space complexity: O(min(n, k))
 * 
 * explanation: sliding window over the string while tracking the last seen index of each char
 * if a char repeats inside the current window, move the start pointer to the right after its prev occurence
 * update longest window length as we expand end pointer
 * this ensures each char is visited at most twice, giving an O(n) solution
 */
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