// 1. Use strict
// added ES 5 
// use this for Valina Javascropt.
'use strict';

// 2. Variable
// let (added in ES6)

// jS에서 변수를 선언할 수 있는 키워드는 let 하나다. / var는 더 이상 쓰지 않음
// var(don't ever use this!)
// var hoisting;호이스팅  (move declaration from bottom to top)
// has no block scope
// age = 4;    // 선언하기전에 할당가능, 선언을 가장 위로 올려주는 호이스팅 기능 때문 그러나 이제 쓰지않음
// var age;    // 블록 안에 선언해도 전역변수처럼 어디서든 쓸 수 있음

// {} 블록 밖에서 선언하면 전역변수처럼 어디서든지 쓸 수 있음
let globalName = 'global name';

// {} 블록 지정하면 블록 밖에서는 접근할 수 없음 (지역변수화 되는 느낌인듯)
// {
let name1 = 'ellie';
console.log(name1);
name1 = 'hello';
console.log(name1);
// }

// 3. Constants : 상수 처럼 값을 선언하면 변경 불가능 / Mutable 변경 가능한건 let
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;

// 4. Variable types
// primitive, single time : number, string, boolean, null, underfiedn, symbol
// object, box container
// function, first-class function : 함수도 변수에 할당 가능, 매개 변수로 인자 전달 가능, 리턴 타입으로 함수 설정 가능

// 정수, 실수 모두 number
const count = 17;   // integer
const size = 14.2;  // decima number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric values : infinity, -infinitiy, 
const infinitiy = 1 / 0 ;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinitiy);
console.log(negativeinfinity);
console.log(nAn);

// string : char, String 모두 string
//  - + 기호로 연결 가능
//  - fotmat string을 위해석 백틱 기호 ${}
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// boolean
// false : 0, null, underfined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 <1   // false

// null
// 비어있는 값이 할당

// undefiend 
// 선언은 되어 있지만 값이 지정되지 않음

// symbol, create unique identifiers for objects
// 주어진 string에 상관없이 고유한 식별자 만들때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false


// 같은 심볼 만들고 싶으면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// 심볼은 그냥 출력하면 에러가 발생한다 항상 .descripttion을 붙여서 스트링으로 변환해서 출력해야한다.
console.log(symbol1.description)

// 5. Dynamic typing : dynamically typed language (but Java is Statically typed language)
// 동적 프로그래밍 언어 : 런타임 시 데이터 타입이 정해짐
// TypeScript는 JavaScript에 데이터 타입이 올라간 것

// 6. Object
const ellie = {name : 'ellie', age : 20};
// const로 선언된 elli는 변경 불가능하지만 ellie.name, ellie.age는 변경 가능하다.
ellie.age = 21;