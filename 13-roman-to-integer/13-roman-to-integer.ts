function romanToInt(s: string): number {
    /*
    I = 1 **
    V = 5
    X = 10 **
    L = 50
    C = 100 **
    D = 500
    M = 1000
    
    IV = 5-1 IX = 10-1
    XL = 50-10 XC = 100-10
    CD = 500-100 CM = 1000-100    
    */
    let answer = 0;
    
    const array: string[] = s.split('');
    
    array.forEach((value, index, origin) => {
        if(value === 'I') {
            if(origin[index+1] === 'V' || origin[index+1] === 'X') answer -= 1;
            else answer += 1;
        }
        else if(value === 'V') answer += 5;
        else if(value === 'X') {
            if(origin[index+1] === 'L' || origin[index+1] === 'C') answer -= 10;
            else answer += 10;
        }
        
        else if(value === 'L') answer += 50;
        else if(value === 'C') {
            if(origin[index+1] === 'D' || origin[index+1] === 'M') answer -= 100;
            else answer += 100;
        }
        
        else if(value === 'D') answer += 500;
        else if(value === 'M') answer += 1000;
    });
    
    return answer;
};