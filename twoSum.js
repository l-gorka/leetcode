var twoSum = function(nums, target) {
    const store = {}
    let i = 0

    while (i < nums.length) {
        const searched = target - nums[i]

        if (store.hasOwnProperty(searched)) {
            return [i, store[searched]]
        }

        store[nums[i]] = i

        i++
    }
};