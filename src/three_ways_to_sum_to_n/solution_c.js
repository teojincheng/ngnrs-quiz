// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

var sum_to_n = function (n) {
  let memo = {};
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 3;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = sum_to_n(n - 1) + n;
  return memo[n];
};
