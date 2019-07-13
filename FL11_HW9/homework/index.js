function getNumbers(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if(+str[i]) {
            res.push(+str[i]);
        }
    }
    return res;
}
console.log(getNumbers('asff1 dqwd24 dad4'));
function findTypes() {
    let res = {};
    for (let i = 0; i < arguments.length; i++) {
        if(res[typeof arguments[i]] === undefined) {
            res[typeof arguments[i]] = 1;
        } else {
            res[typeof arguments[i]]++;
        }
    }
    return res;
}
console.log(findTypes(1,'sd',null,undefined, 2, NaN));
function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
executeforEach([1,2,'lol'], i => console.log(i));
function mapArray(arr, callback) {
    let res = [];
    executeforEach(arr, num => res.push(callback(num)));
    return res;
}
console.log(mapArray([1,2,3],num => num*3));
function filterArray(arr, callback) {
    let res = [];
    executeforEach(arr,num => {
        if(callback(num)) {
            res.push(num);
        }
    });
    return res;
}
console.log(filterArray([1,2,3,-4,-2], num => num < 0 ));
function showFormattedDate(date) {
    let res = 'Date: ';
    switch (date.getMonth()) {
        case 0:
            res += 'Jan';
            break;
        case 1:
            res += 'Feb';
            break;
        case 2:
            res += 'Mar';
            break;
        case 3:
            res += 'Apr';
            break;
        case 4:
            res += 'May';
            break;
        case 5:
            res += 'Jun';
            break;
        case 6:
            res += 'Jul';
            break;
        case 7:
            res += 'Aug';
            break;
        case 8:
            res += 'Sep';
            break;
        case 9:
            res += 'Oct';
            break;
        case 10:
            res += 'Nov';
            break;
        case 11:
            res += 'Dec';
            break;
    }
    res += ' ' + date.getDate() + ' ';
    res += date.getFullYear();
    return res;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
function canConvertToDate(date) {
    return !!Date.parse(date);
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));
function keys(obj) {
    let res = [];
    for(let key in obj){
        res.push(key);
    }
    return res;
}
console.log(keys({a:1,b:2,c:3}));
function values(obj) {
    let res = [];
    for(let key in obj){
        res.push(obj[key]);
    }
    return res;
}
console.log(values({a:1,b:2,c:3}));
function daysBetween(date1, date2) {
    let msInDay = 86400000;
    return Math.floor((date1 - date2) / msInDay);
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-03-23T00:00:00')));
function getAmountOfAdultPeople(data) {
    let adultDate = new Date(), res = [];
    adultDate.setFullYear(adultDate.getFullYear() - 18);
    res = filterArray(data, i => {
        return daysBetween(new Date(i.birthday), adultDate) < 0;
    });
    return res.length;
}
let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
console.log(getAmountOfAdultPeople(data));
