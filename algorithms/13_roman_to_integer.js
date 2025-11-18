/**
 * time complexity: O(n)
 * space complexity: O(1)
 * 
 * explanation: convert each symbol to its value
 * if a symbol is smaller than the one after it, subtract it, otherwise add it
 * this handles subtractive notation (IV, IX, etc)
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
   const vals = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
   let intValue = 0;
   for (let i = 0; i < s.length; i++) {
      let cur = vals[s[i]];
      if (i + 1 < s.length && vals[s[i]] < vals[s[i + 1]]) intValue -= cur;
      else intValue += cur;
   }
   return intValue;
};