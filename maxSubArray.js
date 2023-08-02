var maxSubArray = function(nums) {
  let maxSub = -9999999
  let sum = 0
  
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i]

      if (sum > maxSub) {
          maxSub = sum
      }

      if (sum < 0) {
          sum = 0
      }
  }

  return maxSub
};