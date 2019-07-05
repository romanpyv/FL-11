let a, b, c;
a = +prompt('Enter a:');
b = +prompt('Enter b:');
c = +prompt('Enter c:');
if(isNaN(a) || isNaN(b) || isNaN(c) || a<=0 || b<=0 || c<=0 ||
    a + b < c || a + c < b || b + c < a) {
    console.log('Triangle doesn\'t exist.');
} else {
    if (a === b && b === c) {
        console.log('Equivalent triangle.');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle.');
    } else {
        console.log('Normal triangle');
    }
}
