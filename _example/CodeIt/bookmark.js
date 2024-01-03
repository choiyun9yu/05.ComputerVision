"use strict";

// 1. 피보나치 수열
{
  // 1) 반복문으로 피보나치 수열 만들기
  let previous = 0;
  let current = 1;
  let temp = undefined;

  for (let i=1; i<=50; i++) {
    console.log(current);
    temp = previous  
    previous = current;
    current = current + temp;
  }
  
  // 2) 재귀함수로 피보나치 수열 만들기
}

// 2. 반복문으로 배열 내 홀수 제거
{ // [1,2,3,5,8,9] 배열에서 홀수만 제거하시오.
  // 어려운 이유 : 반복문에서 배열 요소를 제거하면 배열의 인덱스 번호가 바뀌는 것이 어려웠다.
  // 해결 방법 : 삭제될 때마다 인덱스가 변하는 것이 문제라면 삭제될 때는 i의 값이 증가하는 것을 방지하면 해결할 수 있다.
  let arr = [1,2,3,5,8,9];
  
  for (let i=1; i<=numbers.length;) {
    if (numbers[i-1]%2===1) {
      numbers.splice(i-1,1);
    } else {i++}
  }
}
