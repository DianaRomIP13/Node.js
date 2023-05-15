//task1
function add(num) {
    var sum = num;
    function adding(nextNum) {
        if (nextNum === undefined) {
            return sum;
        }
        sum += nextNum;
        return adding;
    }
    return adding;
}
console.log('task1 answer for 2,5,7,1,6,5,11: ', add(2)(5)(7)(1)(6)(5)(11)());
//task2
function is_anagram(str1, str2) {
    var arr1 = str1.split('').sort();
    var arr2 = str2.split('').sort();
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log('task2 answer for true: ', is_anagram('слоник', 'кислон'));
console.log('task2 answer for false:', is_anagram('слоник', 'бджілка'));
//task3
function clone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    var cloned = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        cloned[key] = clone(obj[key]);
    }
    return cloned;
}
var obj = {
    name: "slonik",
    age: 12,
};
var cloned = clone(obj);
console.log("task3 answer: ", obj === cloned);
//task4
function wrping(fn) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args); // unique keys
        if (key in cache) {
            return cache[key];
        }
        var result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}
function sum(a, b, c) {
    return a + b + c;
}
var wrappedAdd = wrping(sum);
console.log('task4 answer for 2, 2, 3: ', wrappedAdd(2, 2, 3));