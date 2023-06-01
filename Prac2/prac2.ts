
//task1

function add(num: number): any {
  let sum: number = num;

  function adding(nextNum?: number): any {
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

function is_anagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log('task2 answer for true: ', is_anagram('слоник', 'кислон'));
console.log('task2 answer for false:', is_anagram('слоник', 'бджілка'));

//task3

function clone(obj: any): any {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let cloned = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    cloned[key] = clone(obj[key]);
  }

  return cloned;
}

let obj = {
  name: "slonik",
  age: 12,
};

let cloned = clone(obj);

console.log("task3 answer: ", obj === cloned);

//task4

function wrping(fn: (...args: number[]) => number) {
    const cache: Map<string, number> = new Map();
    
    return function(...args: number[]) {
      const key = JSON.stringify(args); // unique keys
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn.apply(this, args);
      cache.set(key, result);
      return result;
    }
  }
  
  function sum(a: number, b: number, c: number): number {
    return a + b + c;
  }
  
  const wrappedAdd = wrping(sum);
  
  console.log('task4 answer for 2, 2, 3: ', wrappedAdd(2, 2, 3));
  


