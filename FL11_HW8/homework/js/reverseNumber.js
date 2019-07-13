function reverseNumber(num) {
    let res = 0, sign, i, digits = [], digitCount = 1, grade = 10;
    sign = num > 0;
    num = Math.abs(num);
    while(num % grade !== num){
        digitCount++;
        grade *= 10;
    }
    digits[0] = num % 10;
    for(i = 1, grade = 100; i < digitCount; i++, grade *= 10) {
        digits[i] = num % grade;
        digits[i] = Math.floor(digits[i] / grade * 10);
    }
    for(i = digitCount - 1, grade = 1; i >= 0; i--, grade *= 10){
        res += grade * digits[i];
    }
    if(!sign) {
        res *= -1;
    }
    return res;
}
console.log(reverseNumber(-127));