function twoNumberSum(array, targetSum) {

    const nums = {};

    for (const num of array) { 
        const potentialMatch = targetSum - num;
        console.log('potential - ' + potentialMatch);

        
        if (potentialMatch in nums) {
            return [potentialMatch, num]
        } else {
            nums[num] = true;
          
        }
        console.log(nums)
    }
}

console.log(twoNumberSum([ 3, 5, -4, 8, 11, 1, -1, 6], 10))