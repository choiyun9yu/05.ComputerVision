"use strict";

// Promise is a JavaScript object for asynchronous operation.(비동기적 작업 수행시 콜백함수 대신 쓰임)
// state : pending(수행중) -> fulfilled(수행완료) or rejected(수행실패)
// Producer vs Consumer

// Promise : 비동기를 간편하게 사용할 수 있도록 JS에서 제공하는 오브젝트
//           정해진 장시간의 기능을 수행하고 나서 성공하면 성공했다는 것과 결과값을 전송, 실패했다면 에러 전달해줌

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (nework, read files)
    console.log('doing something...');
    setTimeout( () => {
        // resolve('ellie');    // 성공시 리졸브 호출
        reject(new Error('no network'));    // 실패시 리젝트 호출
    }, 2000);
}); 


// 2. Consumer : then, catch, finally
// then : promise가 정상적으로 잘 수행되어 resolve 콜백함수를 통해 전달된 값이 파라미터로 들어온다.
// catch : promise가 제대로 수행되지 않아 reject 콜백함수를 통해 에러가 전달되어 들어온다.
// finally : 성공하든 실패하든 호출됨
promise
.then( (value) => {
    console.log(value);
})  // then이 promise를 반환하니까 체이닝으로 이어서 catch를 쓸 수 있음
.catch( error => {
    console.log(error);
})
.finally( () => {
    console.log('finally!');
});


// 3. Promise chaining
const fetchNumber = new Promise( (resolve, reject) => {
    setTimeout( () => resolve(1), 1000);
});

fetchNumber
.then(num => num *2)
.then(num => num * 3)
.then(num => {  // then은 값을 바로 전달해도 되고 또 다른 promise를 전달해도 된다.
    return new Promise((resolve, reject) => {
        setTimeout( () => resolve(num - 1), 1000);
    }); 
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = ()