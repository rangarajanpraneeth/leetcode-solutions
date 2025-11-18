/**
 * time complexity: O(n)
 * space complexity: O(n)
 * 
 * explanation: its fizz buzz, what more could i explain
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = n => Array.from({ length: n }, (_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i + '');