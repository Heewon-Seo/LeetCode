function pivotIndex(nums: number[]): number {
    let answer = -1;

     for (let i = 0; i < nums.length; i++) {
         // nums[i+1]부터 끝까지 더한거 == nums[i-1]부터 num[0]까지 더한거
         let left = 0;
         let right = 0;

         right =  nums.slice(i+1, nums.length).reduce(function add(sum, currentValue) {
             return sum + currentValue;
         }, 0);

         left = nums.slice(0, i).reduce(function add(sum, currentValue) {
             return sum + currentValue;
         }, 0);

         if (left == right) {
             answer = i;
             break;
         }
     }

    return answer;
};
