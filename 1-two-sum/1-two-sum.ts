function twoSum(nums: number[], target: number): number[] {
    let answer: number[] = [];
    
    nums.forEach((value, index, origin) => {
        for(let i = 1 ; i <= nums.length-index-1 ; i++ ) {
            if (value + origin[index+i] === target) {
                answer.push(index);
                answer.push(index+i);
                break;
            }
        }
    })
    
    return answer;
};