// "use strict";

// // 1. 태그 선택하기

// { // 1-1. id로 선택하기 : getElementById('id');
//     // 존재하지 않는 id 값으로 태그를 선택하면 null 값이 반환된다.
//     const myTag = document.getElementById('btns');
//     console.log(myTag);
// }
// { // 1-2. class로 선택하기 : getElementsByClassName('class');
//     // Element 뒤에 s가 붙음에 주의
//     // HTMLCOllection 객체로 배열과 유사한 유사배열 형태로 인덱스 부여되어서 객체가 만들어짐
//     // 그러나 배열함수를 사용할 순 없고, 대괄호를 활용해 인덱스 요소에 접근은 가능
//     // length프로퍼티와 for of는 사용할 수 있다.
//     // 유사배열에 담기는 요소는 깊이와 상관없이 위에서부터 순서대로 담긴다.
//     // 존재하지 않는 class 값으로 태그를 선택하면 빈 유사배열이 반환된다.
//     // 참고로 '*' 선택자를 전달하면 모든 태그를 선택할 수 있다.
//     const myTags = document.getElementsByClassName('color-btn');
//     console.log(myTags);
// }
// { // 1-3. css 선택자로 선택하기 : querySelector('#css선택자'); querySelectorAll('.css선택자');
//     // 존재하지 않는 요소를 선택할 경우 null 값이 리턴된다.
//     const myTag = document.querySelector('#myNumber');  // css에서 id는 #을 앞에 붙임
//     console.log(myTag);

//     const myTag2 = document.querySelector('.color-btn'); // css에서 class는 .을 앞에 붙임
//     console.log(myTag2);    // 그러나 클래스는 이렇게하면 가장 첫번째 요소만 반환됨

//     const myTags = document.querySelectorAll('.color-btn');    // 이런경우 All을 사용
//     console.log(myTags)
//     // querySelectorAll은 요소가 하나밖에 없더라도 요소가 하나인 NodeList 반환한다.
// }



// // 2. 이벤트 : 웹페이지에서 일어날 수 있는 일들
// { // 2-1. 이벤트와 버튼 클릭
//     const btn = document.querySelector('#myBtn');   // 버튼 선택
//     btn.onclick = function () {                      // 버튼을 담은 변수에 함수 할당
//         console.log('Hello Cdeit!');    // 이벤트를 다루는 함수를 이벤트 핸들러라하고,
//     } // 이벤트가 발생했을 때 특정 동작을 다루는 것은 이벤트 핸들링이라 한다.
// }



// // 3. 자바스크립트는 객체다.
// { // 3-1. window : 브라우저 창을 대변하는 최상단 객체, JS의 다른 모든 객체를 포함하고 있다.
//     console.log(window);
//     console.log(window.innerHeight); // 브라우저 탭 내부 높이 값 반환
//     console.log(window.innerWidth);  // 브라우저 탭 내부 너비 값 반환
//     console.log
//     window.open();  // 제목없음 빈 탭 새로 열림
//     window.close(); // 탭이 닫힘
// }
// { // 3-2. DOM(Document Object Model, 문서 객체 모델) : HTML문서를 객체로 표현한 것
//     // 웹페이지 문서의 최상단 객체, html 문서에 접근하기 위해 사용, 새로운 객체 만들때도 사용
//     console.log(document);  // html이 반환
//     console.dir(document);  // 객체 형태로 다양한 프로퍼티들이 반환

//     const title = document.querySelector('#title'); // js에서 html 문서 객체에 접근하여 스타일 수정
//     title.style.color = 'red';

//     // DOM Tree 전역객체인 window, 그 옆에 document 최상위 트리가 있고 html 문서들이 계층적으로 트리 구조를 이루고 있다.
//     // DOM Tree에 더 잘 접근하기 위해서는 부모, 자식, 형제 노드 관계를 파악하는 것이 중요하다!
//     // 노드는 다양한 노드 타입을 가지게 되는데 태그를 표현하는 노드를 요소노드, 문자를 표현하는 노드를 텍스트 노드라고 부른다.
//     // 일반적으로 텍스트 노드는 요소노드의 자식 노드가되고 따로 자식 노드를 가질 수 없다.
// }
// { // 3-3. DOM 트리 여행하기
//     // id와 class를 활용해서 특정 태그에 접근할수도 있지만, 돔 트리의 구조를 활용해 접근할 수도 있다.
//     const myTag = document.querySelector('#content');
//     console.log(myTag);

//     // 선택한 요소의 부모 노드에 접근하는 방법
//     console.log(myTag.parentElement);


//     // 선택한 요소의 자식 노드에 접근하는 방법
//     console.log(myTag.children);            // 해당 요소의 자식 요소 접근, 대괄호 표기법으로 접근 가능
//     console.log(myTag.firstElementChild);   // 해당 요소의 첫번째 자식에 접근
//     console.log(myTag.lastElementChild);    // 해당 요소의 마지막 자식에 접근

//     // 선택한 요소의 형제 노드에 접근하는 방법
//     console.log(myTag.previousElementSibling);  // 이전 형제 요소에 접근, 없으면 null 출력
//     console.log(myTag.nextElementSibling);      // 다음 형제 요소에 접근

//     // 위 프로퍼티들은 연결해서도 사용 가능
//     console.log(myTag.nextElementSibling.children); // 다음 형제 노드의 자식 노드
// }
// { // 3-4. 요소 노드 주요 프로퍼티
//     const myTag = document.querySelector('#content');
//     console.log(myTag);
    
//     // 3-4-1. innerHTML : 해당요소 아래 있는 html 자체를 문자열로 반환
//     // 주의! 태그와 태그 사이 들여쓰기, 줄바꿈도 모두 리턴
//     console.log(myTag.innerHTML);
//     // 요소안의 html 수정할 때 더 자주 사용, //문자열로 할당하면 그 값으로 수정됨
//     // myTag.innerHTML += '<li>Extoic</li>'; // 증감연산자로 마지막 요소 뒤에 추가할 수도 있음

//     // 3-4-2. outerHTML : 해당 요소를 포함한 전체 HTML을 문자열로 반환
//     // 주의! 태그와 태그 사이 들여쓰기, 줄바꿈도 모두 리턴
//     console.log(myTag.outerHTML);
//     // 아우터는 이너와 다르게 해당 요소를 포함하기 때문에 문자열로 태그를 새로 할당하면 자신이 바뀌게됨
//     // myTag.outerHTML = '<li>Extoic</li>'

//     // 3-4-3. textContent : 요소안에 있는 html 중 텍스트만 반환
//     console.log(myTag.textContent);
//     // 역시 새로운 값을 할당해서 값 수정 가능 (단, 특수 문자도 문자열로 취급하기 때문에 태그 적용은 안된다.)
//     myTag.textContent = 'new text!';
// }
// { // 3-5. 요소 노드 추가하기
    // // 3-5-1. 기존의 노드 덮어쓰는 방식으로 동작
    // const today = document.querySelector('#today');

    // today.innerHTML = '<li>처음</li>' + today.innerHTML;    // 자식노드의 맨 앞으로 추가
    // today.innerHTML = today.innerHTML + '<li>마지막</li>';  // 자식노드의 맨 뒤로 추가

    // today.outerHTML = '<p>이전</p>' + today.outerHTML;   // 형제 요소로 맨 앞에 추가

    // const newToday = document.querySelector('#today');  // 아우터는 덮어쓰면 다시 찾아야함
    // newToday.outerHTML = newToday.outerHTML + '<p>다음</p>'; // 형제 요소로 맨 뒤에 추가

    // // 3-5-2 요소 노드 생성해서 추가하기
    // const tomorrow = document.querySelector('#tomorrow');
    // // 1단계 : 요소노드 만들기 document.createElement('태그이름');
    // const first = document.createElement('li');
    // // 2단계 : 요소노드 꾸미기 textContent, innerHTML...
    // first.textContent = '처음1';
    // // 3단계 : 요소노드 추가하기 NODE.prepend, append, after, before
    // tomorrow.prepend(first);    // prepend는 호출한 노드의 가장 첫번째 자식노드로 추가
    // const last = document.createElement('li');
    // last.textContent = '마지막';    // append는 호출한 노드의 가장 마지막 자식노드로 추가
    // tomorrow.append(last);
    // const prev = document.createElement('p');
    // prev.textContent = '이전';      // 호출한 노드의 앞의 형제 노드로 추가
    // tomorrow.before(prev);
    // const next = document.createElement('p');
    // next.textContent = '다음';      // 호출한 노드의 뒤의 형제 노드로 추가
    // tomorrow.after(next);
    // // 또한 prepend, append, after, before는 '문자열'을 파라미터로 넣으면 자동으로 문자열을 추가해준다.

//     // 3-5-3. 노드 삭제와 이동
//     const today = document.querySelector('#today');
//     const tomorrow = document.querySelector('#tomorrow');

//     // 노드 삭제하기: Node.remove()
//     // tomorrow.remove();   // 삭제하기
//     // today.children[2].remove();  // 특정 자식노드 삭제

//     // 노드 이동하기: prepend, append, before, after !주의! 복사되는게 아니라 이동됨
//     today.append(tomorrow.children[1]);
//     tomorrow.children[1].after(today.children[1]);
//     tomorrow.children[2].before(today.children[1]);
//     tomorrow.lastElementChild.before(today.children[1]);
// }



// { // 4. HTML 속성 다루기
//     // 브라우저가 HTML 문서를 해석할 때 DOM 객체가 만들어진다. 이때 HTML 태그들의 각 속성은 프로퍼티가 된다.
//     // 단,  모든 HTML 속성이 요소노드의 프로퍼티로 생성되는 것은 아니다.
    
//     // HTML 속성 (HTML attribute)
//     const tomorrow = document.querySelector('#tomorrow');
//     const item = tomorrow.firstElementChild;
//     const link = item.firstElementChild;

//     // id 속성
//     console.log(tomorrow);
//     console.log(tomorrow.id);

//     // class 속성
//     console.log(item);
//     console.log(item.className);    // 클래스 속성은 className으로 변함

//     // href 속성
//     console.log(link);
//     console.log(link.href);
//     console.log(tomorrow.href);

//     // elem.getAttribute('속성'): 속성에 접근하기, 표준 비표준관계없이 해당 태그의 모든 속성들에 접근 가능
//     console.log(tomorrow.getAttribute('href'));
//     console.log(item.getAttribute('class'));    // getAttribute로 접근할 땐 class 그대로 쓴다.

//     // elem.setAttribute('속성', '값'): 속성 추가(수정)하기
//     tomorrow.setAttribute('class', 'list'); // 추가 : 기존에 없던 속성인 경우
//     link.setAttribute('href', 'https://www.codeit.kr'); // 수정 : 기존에 있는 속성인 경우

//     // elem.removeAttribute('속성'): 속성 제거하기
//     tomorrow.removeAttribute('href');
//     tomorrow.removeAttribute('class');
// }



// { // 5. 스타일 다루기
//     const today = document.querySelector('#today');
//     const tomorrow = document.querySelector('#tomorrow');
    
//     // 1. style 프로퍼티 : 단점, 태그에 style 속성으로 직접적으로 명시되어 우선순위도 높아지고, 같은 스타일을 여러 태그에 적용하기도 번거롭다.
//     // today.children[0].style.textDecoration = 'line-through';    // stlye 속성은 카멜표기법을 이용해야한다. (text-decorateion -> textDecoration)
//     // today.children[0].style.backgroundColor = '#DDDDDD';

//     // 2. className 프로퍼티를 새로 할당 : 단점, 기존 클래스 이름을 덮어씌워버림
//     // today.children[1].className = 'done';
    
//     // 3. classList : 클래스의 속성 값을 유사배열로 다루는 방법, add, remove, toggle 메소드 사용가능
//     // console.log(today.classList);
//     // console.log(today.children[1].classList);
//     const item = tomorrow.children[1];
//     item.classList.add('done', 'other');    // 클래스 추가
//     item.classList.remove('other'); // 클래스 제거
//     item.classList.toggle('done');  // 있으면 제거, 없으면 추가 // 2번째 파라미터로 true주면 추가만, false주면 제거만 한다.
// }



// { // 6. 버튼 클릭 이벤트
//     // 이벤트 핸들러 등록하기
//     let btn = document.querySelector('#myBtn');

//     function event1() {
//         console.log('Hi Codeit!');
//     }

//     function event2() {
//         console.log('Hi again!');
//     }

//     // 6-1. html 태그에서 onclick 속성을 직접적으로 주는 방법
//     // <button onclick="console.log('Hello Codeit!')">HTML Click!</button>

//     // 6-2. onclick 프로퍼티 사용 : 단점, 새로운 이벤트 핸들러를 할당하면 덮어써서 기존 이벤트 사라짐
//     // btn.onclick = function () {
//     //     event1();
//     // }

//     // 6-3-1. 요소에 이벤트 추가 elem.addEventListener(event, handler) : 이벤트 등록하고 싶은 요소에 addEventListener 등록
//     btn.addEventListener('click', event1);
//     btn.addEventListener('click', event2);
//     // 6-3-2. 요소에서 이벤트 제거
//     btn.removeEventListener('click', event2);
// };



// { // 7. 이벤트 객체 : 이벤트가 발생하면 이벤트 정보를 담고 있는 이벤트 객체가 자동으로 생성된다.
//     // 이벤트 핸들러가 되는 함수의 첫번째 파라미터로 이벤트 객체가 전달된다.
//     const myInput = document.querySelector('#myInput');
//     const myBtn = document.querySelector('#myBtn');

//     // myInput.addEventListener('keydown', function () {
//     //     console.log('KeyboardEvent');
//     // });
//     // myBtn.addEventListener('click', function () {
//     //     console.log('MouseEvent');
//     // });
//     function printEvent(event) {
//         console.log(event);
//         event.target.style.color = 'red';
//     }
//     myInput.addEventListener('keydown', printEvent);
//     myBtn.addEventListener('click', printEvent);
//     // 이벤트 객체에는 많은 프로퍼티들이 존재하는데 그중 아래를 가장 많이 쓴다.
//     // type: 발생한 이벤트 타입, target : 이벤트가 발생한 요소, currentTarget : 이벤트 핸들러가 등록된 요소,
//     // timeStamp : 이벤트 발생 시각
//     // bubbles : 버블링 단계인지 판단하는 값
// }



// { // 8. 이벤트 버블링 : 하나의 요소에 이벤트가 발생하게 되면, 그 요소의 할당된 이벤트 핸들러가 동작하고
//                       // -> 같은 타입의 이벤트에 한해서 부모 요소의 핸들러도 동작한다. (최상단 윈도우 객체 만날 때 까지 반복)
//     // !주의 : 이벤트 객체의 target 프로퍼티는 최초의 이벤트가 발생한 요소를 나타내고,
//     //         이벤트 객체의 currentTarget 프로퍼티는 현재 이벤트 핸들러가 동작하는 요소를 나타낸다.
//     const content = document.querySelector('#content');
//     const title = document.querySelector('#title');
//     const list = document.querySelector('#list');
//     const items = document.querySelectorAll('.item');

//     content.addEventListener('click', function () {
//         console.log('content Event');
//     });
    
//     title.addEventListener('click', function () {
//         console.log('title Event');
//     });

//     list.addEventListener('click', function () {
//         console.log('list Event');
//     });

//     for (let item of items) {
//         item.addEventListener('click', function () {
//             console.log('item Event');
//             e.stopPropagation();    // 버블 멈추기 : 반드시 필요한 경우가 아니라면 버블링은 멈추는게 좋지 않다.
//         });
//     }
// }

// 캡쳐링 : 이벤트가 발생하면 가장먼저 window 객체에서부터 target 까지 이벤트 전파가 일어나는 것
// 이후 target에 도달하면 등록된 이벤트 핸들러가 동작하고, 다시 window 객체로 이벤트가 전파되는 버블링단계를 거친다.



// { // 9. 이벤트 위임(Event Delegation) : 자식요소에서 발생하는 이벤트를 부모 요소에서 다루는 것
//     const list = document.querySelector('#list');
    
//     // 9-1. id가 list인 요소의 자식 요소에 토글로 classlist done 부여/회수
//     // for (let item of list.children) {
//     //     item.addEventListener('click', function (e) {
//     //         e.target.classList.toggle('done');
//     //     });
//     // }
//     // 단점 : 만약에 list에 새로운 요소를 추가하는 경우 그 요소들에는 이벤트리스너가 적용되지 않는다.
//     //        그래서 매번 추가할 때마다 이벤트 핸들러를 새로 등록해야하는 번거로움이 존재한다.

//     // 9-2. 이벤트 버블을 이용해 해결 가능!
//     // list.addEventListener('click', function (e) {
//     //     e.target.classList.toggle('done'); // target property가 이벤트 발생한 요소를 담고 있으니까 가능
//     // });
//     // 단점 : 자식 요소 뿐만 아니라 부모요소에도 이벤트 핸들러가 적용됨

//     // 9-3. 조건문을 써서 자식 태그인 경우에만 이벤트 핸들러 적용되도록 함수 구성하면 된다.
//     list.addEventListener('click', function (e) {
//         // if (e.target.tagName === 'LI')
//         if (e.target.classList.contains('item')) {
//             e.target.classList.toggle('done');
//         }
//     });
    
//     const li = document.createElement('li');
//     li.classList.add('item');
//     li.textContent = '일기 쓰기'
//     list.append(li);
// }



// { // 10. 브라우저 기본 동작
//     // 대부분의 이벤트는 발생하는 순간 각 태그별 혹은 문서 전체적인 측면에서 브라우저가 기본적으로 갖고 있는 동작 수행
//     // 앵커 태그는 눌렀을 때 페이지 이동, 체크박스 체크, 마우스 드래그, 우클릭 옵션창 등..
//     // JS를 이용하면 브라우저의 기본 동작을 막을 수 있음

//     const link = document.querySelector('#link');
//     const checkbox = document.querySelector('#checkbox');
//     const input = document.querySelector('#input');
//     const text = document.querySelector('#text');

//     // event.preventDefault
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         alert('지금은 이동할 수 없습니다.');
//     });

//     // 특정한 상황에서만 브라우저 기본동작 막기
//     input.addEventListener('keydown', function (e) {
//         if (!checkbox.checked) {
//             e.preventDefault();
//             alert('체크박스를 먼저 클릭해주세요.');
//         }
//     });

//     // // 부분 마우스 우클릭 방지
//     // text.addEventListener('contextmenu', function (e) {
//     //     e.preventDefault();
//     //     alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
//     // });

//     // 문서 전체 마우스 우클릭 방지
//     document.addEventListener('contextmenu', function (e) {
//         e.preventDefault();
//         alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
//     });
// }



// { // 11. 마우스 버튼 이벤트
//     // MouseEvent.button <- 마우스 버튼 별로 이벤트 구분하고 싶을 때 사용
//     // 0: 마우스 좌클릭
//     // 1: 마우스 휠
//     // 2: 마우스 우클릭

//     // MouseEvent.type
//     // click: 마우스 왼쪽 버튼을 눌렀을 때
//     // contextmenu: 마우스 오른쪽 버튼을 눌렀을 때
//     // dbclick: 동일한 위치에서 빠르게 두 번 click할 때
//     // mousedown: 마우스 버튼을 누른 순간
//     // mouseup: 마우스 버튼을 눌렀다가 땐 순간

//     let timer = 0;

// function printEventType(e) {
// 	const EVENT_DURATION = 800;
//     const eventTime = new Date();

// 	if (timer === 0) {
//     timer = new Date();
// 	}

// 	if (eventTime - timer > EVENT_DURATION) {
//     console.log('--------------------------');
// 	}

//     if (e.target.id !== 'mouse') {
//     e.preventDefault();
//     }

//     const btns = document.querySelector(`#btns`);
//     const btn = document.querySelector(`#btn${e.button}`);
//     btns.classList.add(`clicked-${e.button}`);
//     btn.textContent = e.button;
//     console.log(`${e.type} 이벤트가 발생했습니다.`);

// 	if (e.type === 'dblclick') {
// 		btns.className = 'dblclick';
//     }

//     function styleInit() {
//         btns.className = '';
//         btn.textContent = '';
//     }

//     setTimeout(styleInit, EVENT_DURATION);

//     timer = eventTime;
// }

// document.addEventListener('click', printEventType);
// document.addEventListener('contextmenu', printEventType);
// document.addEventListener('dblclick', printEventType);
// document.addEventListener('mouseup', printEventType);
// document.addEventListener('mousedown', printEventType);

// }



// { // 12. 마우스 이동 이벤트
//     // mousemove : 마우스 포인터가 이동할 때
//     // mouseover : 마우스 포인터가 요소 밖에서 안으로 이동할 때
//     // mouseout : 마우스 포인터가 요소 안에서 밖으로 이동할 때
    
//     // MouseEvent.clientX, clientY : 화면에 표시되는 창 내 마우스 포인터 위치 반환
//     // MouseEvent.pageX, pageY : 웹 문서 전체 내 마우스 포인터 위치 반환
//     // MouseEvent.offsetX, offsetY : 이벤트가 발생한 요소 내의 마우스 포인터 위치 반환
    
//     const box1 = document.querySelector('#box1');

//     function onMouseMove(e) {
//         console.log(`client: (${e.clientX}, ${e.clientY})`);
//         console.log(`page: (${e.pageX}, ${e.pageY})`);
//         console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
//         console.log('------------------------------------');
//     }

//     box1.addEventListener('mousemove', onMouseMove);
// }



// { // 13. 마우스 이동 이벤트2
//     // mousemove : 마우스 포인터가 이동할 때
//     // mouseover : 마우스 포인터가 요소 밖에서 안으로 이동할 때
//     // mouseout : 마우스 포인터가 요소 안에서 밖으로 이동할 때

//     // MouseEvent.target : 이벤트가 발생한 요소
//     // MouseEvent.relatedTarget : 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소

//     // mouseenter는  mouseover와 비슷하고
//     // mouseseleave는 mouseout과 비슷하다.
//     // 차이점은 버블링이 일어나지 않는다는 것이다.


//     const box2 = document.querySelector('#box2');
    
//     // 버블링에 의해서 자식요소 끼리도 이벤트가 동작
//     // function printEventData(e) {
//     //     console.log(e.type);
//     // }

//     // function printEventData(e) {
//     //     if (e.target.classList.contains('cell')) {
//     //         e.target.classList.toggle('on');
//     //     }
//     // }

//     function printEventData(e) {
//         console.log('event', e.type);
//         console.log('target', e.target);
//         console.log('relatedTarget:', e.relatedTarget);
//         console.log('-------------------------------------');
//     }

//     box2.addEventListener('mouseover', printEventData);
//     box2.addEventListener('mouseout', printEventData);
// }



// { // 14. 키보드 이벤트
//     // keydown : 키보드 버튼을 누른 순간
//     // keypress : 키보드 버튼을 누른 순간 (출력값이 변하는 키에만 발생, 기능적인 컨트롤이나 쉬프트에서는 이벤트 발생 하지 않음, 영어가 아닌 경우에는 반응하지도 않음.)
//     // keyup : 키보드 버튼을 눌렀다 뗀 순간

//     // KeyboardEvent.key : 이벤트가 발생한 버튼의 값 (사용자가 누른 키 값을 알려줌, 같은 위치여도 대소문자 구분)
//     // KeyboardEvent.code : 이벤트가 발생한 버튼의 키보드에서 물리적인 위치 (어떤 위치에 있는 키를 눌렀는지 알려준다. 대문자와 소문자 구분x, 위치 다르면 같은 shift여도 다름)
// }



// { // 15. input 태그 다루기
//     // 포커스 이벤트
//     // 다른 태그와 달리 input 태그는 입력의 역할을 하기에 사용자의 키보드나 마우스에 반응하는 특징이 있다. 
//     // 인풋창 입력시 파란 테두리 표시 같은 것이 사용자의 입력에 반응할 준비가 되었다는 표시이고 이를 포커스라 한다.

//     // focusin : 요소에 포커스가 되었을 때
//     // focusout : 요소에 포커스가 빠져나갈 때
//     // focus : 요소에 포커스가 되었을 때 (버블링 X)
//     // blur : 요소에 포커스가 빠져나갈 때 (버브링 X)
    
//     const el = document.querySelector('#form');

//     function printEventType(e) { 
//         console.log('type:', e.type);
//         console.log('target', e.target);
//         console.log('---------')
//     }

//     el.addEventListener('focusin', printEventType);
//     el.addEventListener('focusout', printEventType);
    

//     // 입력이벤트
//     // input : 사용자가 입력을 할 때, 키보드 이벤트와 비슷해보이지만, 입력과 상관없는 기능키의 경우 반응하지 않음
//     // change : 요소의 값이 변했을 때, 입력이 시작되었을때 값과 완료되었을 때 값 사이의 차이에 반응 (엔터키 혹은 포커스 아웃직전에 입력이 완료되었다고 판단)
//     el.addEventListener('input', printEventType);
//     el.addEventListener('change', printEventType);
// }



// { // 16. 스크롤 이벤트
//     // css를 이용해 의도적으로 스크롤바를 만들지 않는 이상, 일반적인 경우 웹문서의 크기가 브라우저 창보다 클 때 스크롤바 자동 생성
//     // 그래서 일반적으로 스크롤 이벤트는 브라우저를 대변하는 window객체에 이벤트 핸들러를 등록하는 경우가 많다.

//     // function printEvent(e) { 
//     //     console.log(e);
//     //     console.log(window.scrollY);    // 웹문서 최상단에서 몇 px만큼 스크롤했는지 알려줌
//     // }

//     let lastScrollY = 0;
    
//     function printEvent(e) { 
//         const STANDARD = 30;
//         const nav = document.querySelector('#nav');
//         const toTop = document.querySelector('#to-top');

//         if (window.scrollY > STANDARD) { // 스크롤이 30px를 넘었을 때
//             nav.classList.add('shadow');
//             toTop.classList.add('show');
//         } else { // 스크롤이 30px을 넘지 않았을 때
//             nav.classList.remove('shadow');
//             toTop.classList.remove('show');
//         }

//         // 스크롤 방향 감지
//         if (window.scrollY > lastScrollY) { // 스크롤 방향이 아랫쪽 일 때
//             nav.classList.add('lift-up');
//           } else { // 스크롤 방향이 윗쪽 일 때
//             nav.classList.remove('lift-up');
//         }
        
//         lastScrollY = window.scrollY;
//     }
    
//     window.addEventListener('scroll', printEvent);
// }