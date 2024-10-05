const findFirstSum = (i, n, s, comb, nums, sum) => {
  if (i == n) {
    console.log(sum, s);
    if (sum == s) {
      console.log(sum, s);
      return comb;
    } else {
      return false;
    }
  }
  comb.push(nums[i]);
  sum = sum + nums[i];
  if (findFirstSum(i + 1, n, s, comb, nums, sum)) {
    return comb;
  }
  comb.pop();
  sum = sum - nums[i];
  if (findFirstSum(i + 1, n, s, comb, nums, sum)) {
    return comb;
  }
  return null;
};

let n = 3;
let nums = [1, 2, 1];
let s = 2;
console.log(findFirstSum(0, n, s, [], nums, 0));
