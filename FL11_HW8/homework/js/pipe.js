function pipe(num, func) {
    let res = func(num);
    for (let i = 2; i < arguments.length; i++) {
        res = arguments[i](res);
    }
    return res;
}
function addOne(x) {
    return x + 1;
}
console.log(pipe(1, addOne, addOne));
