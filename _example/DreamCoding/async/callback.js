'use strict';

// JavaScript is synchronous.   자바스크립트는 동기적이다.(코드를 작성한 순서에 맞게 코드가 순서대로 실행)
//                              비동기는 언제 코드가 실행될지 예측하기 어렵다.
// Execute the code block by orger after hositing.
// hoisting : var, fucntion declaration 선언들이 어디에 되어 있든 제일 위로 올라가는 것

console.log(1);
// 지정한 시간이 지나면 callback 함수 호출해준다. setTimeout(콜백함수, 지정시간)
setTimeout(() => console.log(2), 1000);   // 비동기적 방식, 브라우저에 요청하고 시간이 지나면 실행됨
console.log(3);


// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay( () => console.log('async callback'), 2000 );


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout( () => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy') 
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout( () => {
            if (user === 'ellie') {
                onSuccess( {name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`
                );
            }, 
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }
);