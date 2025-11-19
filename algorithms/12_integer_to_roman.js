/**
 * medium
 * 
 * time complexity: O(1)
 * space complexity: O(1)
 * 
 * explanation: greedy approach: repeatedly subtract the largest roman symbol value possible
 * append sumbols to the result while reducing the number
 * 
 * 4/20/2025
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
   const values = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' },
   ]

   let res = '';
   for (let i = 0; i < values.length; i++) {
      while (num >= values[i].value) {
         res += values[i].symbol;
         num -= values[i].value;
      }
   }
   return res;
};