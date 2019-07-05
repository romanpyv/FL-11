let a ={}, b={}, c={}, nonMagic = 2;
a.x = +prompt('Enter a1:');
a.y = +prompt('Enter a2:');
b.x = +prompt('Enter b1:');
b.y = +prompt('Enter b2:');
c.x = +prompt('Enter c1:');
c.y = +prompt('Enter c2:');
if(isNaN(a.x) || isNaN(a.y) || isNaN(b.x) || isNaN(b.y) || isNaN(c.x) || isNaN(c.y)){
    console.log(false);
} else {
    if (c.x === (a.x + b.x) / nonMagic && c.y === (a.y + b.y) / nonMagic) {
        console.log(true);
    } else {
        console.log(false)
    }
}

