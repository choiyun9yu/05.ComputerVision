'use strict'

// Variable 
// Constant : 읽기만 가능, 변수 바뀌어야할 이유가 없다면 const 쓰는 것이 좋음

// primitive type은 value 자체가 메모리에 저장
// object typte은 ref 즉 참조(주소)가 메모리에 저장
//      자바랑은 다르게 문자나 숫자가 같은 데이터라고 하더라도 다른 주소에 저장된다.
//      따라서 문자나 숫자가 같아도 다른 메모리에 저장되고 참조하는 메모리도 다르다.

// Immutable data type : premitive types 한 번 입력한 데이터는 통째로 바꾸면 바꿧지 부분적을 바꾸지 못함
// Mutable data type : all object 배분 적으로 수정 가능



// 1. String concatenation
console.log('my' + 'cat') ;
console.log('1' + 2);
console.log(`string literals: 
'''''
1 + 2 = ${1 + 2}`);


// 2. Numeric operators (사칙 연산자)


// 3. Incremetn ad decrement operators (증감 연산자)
let counter = 0;
const preIncrement = ++counter;     // 1 증가시키고 변수에 대입, counter = 1
console.log(counter, preIncrement);
const postIncrement = counter++;    // 변수에 할당한 뒤 1 증가, counter = 2
console.log(counter, postIncrement);


// 4. Assignment operators (대입 연산자)


// 5. Comparison operators (비교 연산자)


// 6. Logical operators ||(or), &&(and), !(not)
// 주의! - or 이나 and는 앞에서부터 순서대로 작업을 수행한다가 
//       하나라도 true가 뜨거나 false가 뜨면 특정 작업을 수행한다.
//       따라서 가벼운 것 부터 앞에 써주는 것이 좋다.


// 7. Equality
// == loose equality, with type conversion
// === strict equaliry, no type conversion
console.log(0 == false);            // true
console.log(0 === false);           // false
console.log('' == false);           // true
console.log('' === false);          // false   
console.log(null == undefined);     // true
console.log(null === undifined);    //  false


// 8. Conditional operators : if
// if, else if, else
const name1 = 'ellie';
if (name1 === ' ellie') {
    console.log('Welcome, Ellie!');
} else if (name1 === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown')
}


// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name1 === 'ellie' ? 'yes' : 'no');


// 10. Switch statment 
// use for multiple if checks
// use for enum-like value check
// use for multifple type checkes in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
    console.log('love you!');
        break;
    default:
        console.log('sae all!');
        break;
}


// 11. Loops
// (1) while loop, 
// while the condition is truthy, body code is executed.
let i = 3;
while (i>0) {
    console.log(`while: ${i}`);
    i--;
}

// (2) do while loop,
// body code is executed first, then check the condition.
do {
    console.log(`do while: ${i}`);
} while (i>0);

// (3) for loop, 
// for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}
// inline variable declaration
for (let i = 3; i > 0; i = i - 2) {
    console.log(`for: ${i}`)
}

// break : 반복문 중지
// continue : 지금 반복 중단 후 반복 재개

// 파이썬 처럼 for문 쓰기 (of가 in이랑 비슷한 역할)
const args = array
for (const arg of args) {
}