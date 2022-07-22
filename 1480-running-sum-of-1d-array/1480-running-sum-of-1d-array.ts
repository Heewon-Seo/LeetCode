function runningSum(nums: number[]): number[] {
    let answer: number[] = [];
    nums.forEach((value, index, array) => {
        if (index === 0) {
            answer.push(value);
        } else {
            let sum = 0;
            for (let i = 0; i <= index; i++) {
                sum += nums[i];
            }
            answer.push(sum);
        }
    });
    return answer;
};