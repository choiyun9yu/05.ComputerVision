"use strict";

// 1. 태그 선택하기

{ // 1-1. id로 선택하기 : getElementById('id');
    // 존재하지 않는 id 값으로 태그를 선택하면 null 값이 반환된다.
    const myTag = document.getElementById('btns');
    console.log(myTag);
}

{ // 1-2. class로 선택하기 : getElementsByClassName('class');
    // Element 뒤에 s가 붙음에 주의
    // HTMLCOllection 객체로 배열과 유사한 유사배열 형태로 인덱스 부여되어서 객체가 만들어짐
    // 그러나 배열함수를 사용할 순 없고, 대괄호를 활용해 인덱스 요소에 접근은 가능
    // length프로퍼티와 for of는 사용할 수 있다.
    // 유사배열에 담기는 요소는 깊이와 상관없이 위에서부터 순서대로 담긴다.
    // 존재하지 않는 class 값으로 태그를 선택하면 빈 유사배열이 반환된다.
    // 참고로 '*' 선택자를 전달하면 모든 태그를 선택할 수 있다.
    const myTags = document.getElementsByClassName('color-btn');
    console.log(myTags);
}

{ // 1-3. css 선택자로 선택하기 : querySelector('#css선택자'); querySelectorAll('.css선택자');
    // 존재하지 않는 요소를 선택할 경우 null 값이 리턴된다.
    const myTag = document.querySelector('#myNumber');  // css에서 id는 #을 앞에 붙임
    console.log(myTag);

    const myTag2 = document.querySelector('.color-btn'); // css에서 class는 .을 앞에 붙임
    console.log(myTag2);    // 그러나 클래스는 이렇게하면 가장 첫번째 요소만 반환됨

    const myTags = document.querySelectorAll('.color-btn');    // 이런경우 All을 사용
    console.log(myTags)
    // querySelectorAll은 요소가 하나밖에 없더라도 요소가 하나인 NodeList 반환한다.
}
