"use strict";

// 1. 반복문으로 피보나치 수열 50항목 까지 출력하기
let previous = 0;
let current = 1;
let temp = undefined;

for (let i=1; i<=50; i++) {
  console.log(current);
  temp = previous  
  previous = current;
  current = current + temp;
}



// 2. 재귀함수로 피보나치 수열 만들기