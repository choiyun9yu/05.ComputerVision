"use strict";

// 1. 자료형 확인 
// typeof 연산자 : 바로 뒤의 자료형을 !문자열로 반환! (괄호보단 우선순위가 낮고 사칙연산보다는 높음)
{
    console.log(typeof 'Hello'+'World');    // 줄이 다를 땐 세미콜론 안해도 되지만, 줄이 같으면 표시해야함
    console.log(typeof typeof (3+8));
}


// 2. 형 변환 (Type Conversion)
// Number() : 자료형을 숫자로 바꿔주는 것 (자바스크립트는 정수와 실수 구분 안함)
// String() : 자료형을 문자열로 바꿔주는 것 (자바스크립트는 char와 string 구분 안함)
// Boolean() : 자료형을 불리언 값으로 바꿔주는 것
//             falsy = '', 0,  null, undefined, NaN(Not a Number)
//             !Boolean("false"), Boolean("0") 는 true이다. 문자형이기때문!
// 자동형변환
// 자바스크립트에서 자료형이 맞지않은 경우 자동으로 형변환을 해서 계산 가능한 경우가 있다,
// str과 num사이의 더하기 연산에서는 str으로 처리한다. (곱하기 나누기는 num으로 처리)
// boolean과 num사이의 연산에서는 num으로 처리한다.
// 비교 연산자는 특별한 경우를 제외하곤 num으로 생각하고 처리한다.

// 3. 
