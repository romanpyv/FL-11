function getMin() {
    let i, res = arguments[0];
    for(i = 1; i < arguments.length; i++){
        if(arguments[i] < res) {
            res = arguments[i];
        }
    }
    return res;
}
console.log(getMin(1,2,3,-4));