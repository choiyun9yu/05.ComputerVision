'use strict';

// 자료 구조 : 어떤 방식으로, 어떤 형식으로 데이터를 담느냐에 따라 다양한 자료구조가 존재
// 보통 자료구조는 같은 타입의 데이터만 담을 수 있다. (JS는 다양하게 담을 수 있지만 좋지 못함)

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


// 3. Looping over an array
// print all fruits
// a. for
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits) {
    console.log(fruits);
}
// c. forEach : forEach는 배열안에 들어있는 밸류들 마다 내가 전달한 함수를 출력한다.
fruits.forEach( (value, index, array) => console.log(value));


// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshifht : add an item to the beginning
fruits.unshift('🍈', '🍋');
console.log(fruits);
// shift : remove an item from the beginning
fruits.shift(fruits);
fruits.shift(fruits);
console.log(fruits);

// note! shift, unchift are slower than pop, push
// 뒤에서 넣고 빼는 건 기존 데이터 건드리지 않아서 빠름, 앞에서 데이터 넢고 빼는건 기존 데이터도 다시 옮겨야해서 느림(배열이 길수록 더 느림)

// splice : remove an item by index position
// splice(startindexnum, numofremove, adddata?)
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 2);    // 지울 갯수 지정하지않으면 시작 인덱스 부터 끝까지 다 지움
console.log(fruits);

fruits.splice(1, 1, '🥑', '🥝');
console.log(fruits);

// concat : combine two array 
const fruits2 = ['🍉', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexOf
console.log(fruits.indexOf('🍎'));      // indexOf is return the index of the arg.  배열에 없는 것을 입력하면 -1이 출력됨
// include
console.log(fruits.includes('🍎'));     // includes is return boolean data about fact includ the arg
// lastIndexOf
fruits.push('🍎')
console.log(fruits.indexOf('🍎'))       // 찾고자 하는 값의 첫번째 인덱스 반환
console.log(fruits.lastIndexOf('🍎'))   // 찾고자 하는 값의 마지막 인덱스 반환