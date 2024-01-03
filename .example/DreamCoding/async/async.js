// async & await : promise를 조금 더 간결하고 동기적으로 실행되는 것처럼 보이게 만들어준다.
// clear style of using promise
// (*syntactic sugar : 기존에 존재하던 api위에 혹은 그것을 감싸서 더 편리하게 사용하게 해주는 것)



// 0. promise
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//          //do netowrk request in 10 secs...
//          resolve('ellie');  // promise는 반디스 resolve나 reject를 통해 완료를 해줘야한다.
//     }); // 오래걸리는 작업은 비동기적으로 처리되게 해야한다. 
// }       // 저번시간에는 Promise 걸어두고 그게 성공하면 then메소드가 실행되는 구조 였다.
// const user = fetchUser();
// user.then(console.log;)
// console.log(user);



// 1. async
async function fetchUser() {    // 함수 앞에 async 붙이면 코드블록이 자동으로 프로미스로 바뀐다.
        //do netowrk request in 10 secs...
        return 'ellie';
}
const user = fetchUser();
user.then(console.log);
console.log(user);



// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // 정해진 초가 지나면 resolve를 리턴하는 프로미스 반환하는 함수
}

async function getApple() {
    await delay(2000);  // await 키워드를 사용하면 선언된 작업이 완료될 때 까지 기다려준다.
    return 'apple';
}

// function getApple() {           // 만약 프로미스로 썻다면 아래와 같다.
//     return delay(3000)
//     .then( () => 'apple' );
// }

async function getBanana() {
    await delay(1000);
    return 'banana';
}

// 만약 프로미스로 했다면, 프로미스도 너무 체이닝을 많이하면 콜백지옥과 유사한 문제가 발생한다.
// function pickFruits() {
//     return getApple()
//     .then(apple => {
//        return getBanana()
//         .then(banana => `${apple} + ${banana}` )
//     });
// }

// async function pickFruits() {
//     // 그런데 아래 처럼 사과와 바나나를 받아오는 것은 서로 연관이 없어서 1초씩 기다릴 필요 없다.
//     const apple = await getApple();     
//     const banana = await getBanana();
//     return `${apple} + ${banana}`
// }

// pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])  // 프로미스 배열을 전달하게되면 프로미스 모두 다 받을 때 까지 기다림
    .then(fruits => fruits.join(' + ')
    );   
}

pickAllFruits().then(console.log);



// 어떤것이든 상관없고 먼저들어오는 애만 받아오고 싶다.
function pickAnyFruit() {
    return Promise.race([getApple(), getBanana()]);  // 가장먼저 도착한 아이만 전달됨
}

pickAnyFruit().then(console.log);