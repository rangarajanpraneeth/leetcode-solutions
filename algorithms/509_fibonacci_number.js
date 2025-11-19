/**
 * easy
 * 
 * time complexity: O(2^n)
 * space complexity: O(n)
 * 
 * explanation: naive recursion: f(n) = f(n - 1) + f(n - 2)
 * no memoization so each call recomputes subproblems
 * 
 * 10/9/2025
 */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
   if (n == 0 || n == 1) return n;
   return fib(n - 1) + fib(n - 2);
};