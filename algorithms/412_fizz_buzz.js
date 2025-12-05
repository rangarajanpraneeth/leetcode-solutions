/**
 * easy
 * 
 * time complexity: O(n)
 * space complexity: O(n)
 * 
 * explanation: its fizz buzz, what more can i say?
 * 
 * 4/18/2025
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = n => Array.from({ length: n }, (_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i + '');