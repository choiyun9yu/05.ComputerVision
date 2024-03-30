'use strict';

// Function
//  - fundamental building block in the program
//  - subprogram can be used multiple times
//  - prerforms a task or calculates a value 


// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing   // 하나의 함수는 하나의 작업만
// naming: doSomething, command, verb
// e.g. crateCardAndPoint -> createCard, createPoint
// function is dobject in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(messaage) {
    console.log(messaage);
}
log('Hello@');
// 그런데 타입을 명시하지 않아서 조금 불명확하다. (그래서 타입스크립트는 데이터 타입을 명시한다.)


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unkown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
// 배열 형태로 파라미터가 전달됨
function printAll(...args) {
    for (let i=0; i < args.length; i++) {
        console.log(args[i])
    }
}
printAll('dream', 'coding', 'ellie');


// 5. Scope : 밖에서는 안이 보이지 않고 안에서는 밖을 볼 수 있다. 


// 6. Return a value
function sum(a, b) {
    return a+b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`)


// 7. Early return, elary exit
// bad : 가독성이 떨어짐
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}
// good : 조건이 맞지 않는 경우 early return
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}


// 8. Function Expression
//  - 함수를 변수에 할당 가능
//  - Function declaration : 호이스팅이 됨
//  - function expressiong : 호이스팅 안됨
const print = function () {
    console.log('print');   // anonyous function    // const print = function print() {}; 이런식으로 이름을 지정해줄 수도 있음(named function)
};
print();
const printAgain = print;   // 다른 변수에 재할당 가능


// 9. Callback function using function expression   // 함수가 매개변수로 전달되는 것
function radomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}


// 10. Arrow function
// always anonymous
const simplePrint1 = function () {
    console.log('simplePrint!');
};
const simplePrint2 = () => console.log('simplePrint!');
// 블럭을 쓸 수도 있다. 대신 블럭을 쓰게되면 리턴 값이 있는 경우 리턴을 입력해줘야한다.
const simplePrint3 = (a, b) => {
    return a + b;
}


// 11. IIFE; Immediately Invoked Function Expression
// 함수를 선언하면서 바로 호출하고 싶을 때 함수 선언부를 괄호로 묶고 바로 (); 붙이면 가능
(function hello() {
    console.log('IIFE');
})();