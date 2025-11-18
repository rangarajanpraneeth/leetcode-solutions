/**
 * time complexity: O(n * m)
 * space complexity: O(n)
 * 
 * explanation: precompute prefix and sums of skill values
 * for each mana step, computer max delta using cumulative skills to decide optimal cutting points
 * accumulate the minimal brewing time contribution for each mana level and finish by adding the last segment cost
 */
/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function (skill, mana) {
   const n = skill.length;
   const m = mana.length;

   const cum = Array(n);
   cum[0] = skill[0];
   for (let i = 1; i < n; i++) cum[i] = cum[i - 1] + skill[i];

   let totalTime = 0;

   for (let j = 1; j < m; j++) {
      let minDelta = skill[0] * mana[j - 1];

      for (let i = 0; i < n - 1; i++) {
         const diff = cum[i + 1] * mana[j - 1] - cum[i] * mana[j];
         if (diff > minDelta) minDelta = diff;
      }

      totalTime += minDelta;
   }

   totalTime += cum[n - 1] * mana[m - 1];
   return totalTime;
};