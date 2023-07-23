"use strict";
// JSON is interface

// 1. Object to JSON
//    stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); // ""가 JSON의 규격 사항이다.
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"),   // JS에만 있는 특별한 타입 JSON화 되지 않음
    jump: () => {           // 메소드도 JSON화 되지 않음
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);    // 내가 원하는 프로퍼티만 골라서 JSON으로 만들 수 있음
console.log(json);

console.clear()

// json = JSON.stringify(rabbit, (key, value) => {   
//     console.log(`key: ${key}, value: ${value}`);
//     return value;
// });
// console.log(json);

json = JSON.stringify(rabbit, (key, value) => {   
    console.log(`key: ${key}, value: ${value}`);
    return key==='name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
//    parse()
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump()      // JSON to obj 에서 메소드고 소실되어 다시 obj to JSON하면 함수가 작동되지 않음.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());   // 별 다른 작업을 하지 않으면 JSON의 birthData는 str이기 때문에 getData되지 않음.

