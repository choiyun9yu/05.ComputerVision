'use strict';

// Object
// one of the JavaScript;s data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 

// 1. Literals and properties
const name1 = 'ellie';  // 기본 타입은 입력 데이터를 할당받은 것의 주소를 저장
const age = 4;  
print(name1, age);
function print(name1, age) { // 기본 타입은 인자로 줄 때도 하나씩 준다.
    console.log(name1);
    console.log(age);
}

const ellie = {name: 'ellie', age: 4};  // Object type은 변수하나에 여러 데이터 할당 가능
function print2(person) {   // 함수에 인자로 줄 때도 간편
    console.log(person.name);
    console.log(person.age);
}

// 오브젝트 생성 방법
const obj1 = {};    // obejct literal syntax
const obj2 = new Object();  // object constructor syntax

// JS는 동적 프로그래밍이라서 객체에 이후에 필드 추가,삭제 가능 (미친 짓)
ellie.hasJob = true;    // ellie 객체에 name, age 에 이어 hasJob 필드 추가됨
ellie['hasJob'] = true;
delete ellie.hasJob;    // hasJob 필드 삭제 됨


// 2. Computed properties (계산된 프로퍼티)
// key should be always string
console.log(ellie.name);    // .으로 객체내 요소에 접근 가능
console.log(ellie['name']); // ['str']으로 배열 내 요소에 접근하는 것 처럼 접근 가능

// 2번째 방법은 코딩할 시점에 어떤 필드에 접근하는지 모를 때 사용
function printValue(obj, keyName) {
    console.log(obj[keyName]);
}
printValue(ellie,'name');   // str으로 주니까 가능
printValue(ellie, 'age');   // 동적으로 keyName 접근 가능


// 3. Property value shorthand
const person1 = { name:'bob', age: 2 };
const person2 = { name:'steve', age: 3 };
const person3 = { name:'dave', age: 4 };
const person4 = makePerson('ellie', 30);    // object 만드는 함수로 만들어서 추가 가능 
console.log(person4);
function makePerson(name, age) {
    return {name, age};     // 그리고 JS에서는 Property value short hand 기능이 있어서 key와 value의 이름이 매개변수와 동일하다면 생략 가능
}

// ES6 에서는 class로 쓸 수 있게 되었다.
// 순수하게 object를 생성하는 함수들은 대문자로 시작하도록 만들고 리턴 대신 this.필드명 이런식으로 쓰고, 호출할 때도 new 함수명(); 이런 식으로 씀
class Person {
    // construtor는 생성자라고 할 수 있다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 메소드
    hi() {
        console.log('hi');  // Preson.prototype에 메소드 저장됨
    }
}
const person5 = Person.constructor('ellie', 32);


// 5. in operator : property existence chech (key in obj)
// 해당 object 안에 특정 key에 특정 value가 있는지 check
console.log('name' in ellie);


// 6. for..in vs for..of
// for (key in obj), python과 같은 원리
console.clear();
for (key in ellie) {    
    console.log(key);
}

// for (value of iterable)
const  array = [1, 2, 3, 4, 5];
for (value of array) {      // 배열, 리스트 같은 순차적으로 데이터가 담겨 잇는 것에 씀
    console.log(value);
}


// 7. Fun Cloning
// Object.assign(dest, [objt1, obj2, obj3...])
const user1 = { name: 'ellie', age: 20 };
const user2 = user1; // 참조형 타입은 주소를 이중으로 할당하고 있다. 연속되는 자료형들이 저장된 주소를 가르키는 주소의 주소를 할당받는다.

// 메모리를 공유하지 않는 새로운 객체에 복사하기
// old way : 반복문을 이용해 수동적으로 복사
const user3 = {};
for (key in user1) {
    user3[key] = user1[key];
}

// new way : Object.assign()
const user4 = {};
Object.assign(user4, user1);    // Object.assign(전달받을 객체, 전달할 객체)
// 한줄로 쓰기
const user5 = Object.assign({}, user1);

// anotehr exaple
const fruite1 = { color: 'red' };
const fruite2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruite1, fruite2);  // 뒤에 객체가 앞에 객체와 같은 key가 있으면 값을 덮어쓰게 된다.
console.log(mixed.color);   // blue
console.log(mixed.size);    // big


