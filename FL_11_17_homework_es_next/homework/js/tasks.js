// 1.
{
    function maxElement(arr) {
        return Math.max(...arr);
    }

    const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
    console.log(maxElement(array));
}
// 2.
{
    function copyArray(arr) {
        return [...arr];
    }

    const array = [1, 2, 3];
    const copiedArray = copyArray(array);
    console.log(array, copiedArray);
    console.log(array === copiedArray);
}
// 3.
{
    function addUniqueId(obj) {
        return {...obj, id: Symbol('id')};
    }

    const obj = {a: 1};
    const copy  = addUniqueId(obj);
    console.log(copy ,obj === copy);
}
// 4.
{
    function regroupObject({
        name = 'anonymous',
        details:{
            id = 1,
            age = 18,
            university = 'UNI'
        }
    }) {
        return  {
            university,
            user: {
                age,
                firstName: name.split(' ')[0],
                id
            }
        };
    }

    const oldObj = {
        name: 'Roman',
        details: {
            id: 1,
            age: 11,
            university: 'NU LP'
        }
    };
    console.log(regroupObject(oldObj));
}
// 5.
{
    function findUniqueElements(array) {
        return [...new Set(array)];
    }

    const array = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1];
    console.log(findUniqueElements(array));
}
// 6.
{
    function hideNumber(number) {
        return number.slice(-4).padStart(10, '*');
    }

    const phoneNumber =  '0123456789';
    console.log(hideNumber(phoneNumber));
}
// 7.
{   
    function required() {
        throw new Error('Missing property');
    }
    function add(arg1 = required(), arg2 = required()) {
        return arg1 + arg2;
    }

    console.log(add(1,2));
    //-----------------------------------------------------add(1);
}
// 8.
{
    function callAPI() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.map(i => i.name).sort());
        });
    }

    callAPI();
}
// 9.
{
    async function callAPIAlt() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data.map(i => i.name).sort());
    }

    callAPIAlt();
}