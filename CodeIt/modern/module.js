// 모듈 파일의 조건

// 1. 모듈 스코프
// HTML에서 script 파일들을 불러모으면 서로다른 파일에 js 코드가 존재하지만
// 마치 하나의 파일인 것 처럼 스코프를 공유한다.
// HTML에서 <script type="module" src="fileName.js"></script>  type을 모듈로 지정해줘야한다.
// 에러가 뜨지 않으려면 서버에서 html 파일을 실행하도록 해야한다.
// live server 익스텐션 깔고 go live 하면 해결됨.


// 2. 모듈 문법
// 특정 조건하에 다른 파일에서도 접근할 수 있게 하는 방법
export const 변수명 = 'value';   // 선언문 앞에 export 키워드로 인해 다른 파일에서도 사용가능
// 사용하고자 하는 js 파일에서 import도 해줘야한다.
import { 변수명, 함수명 } from '경로.js';


// 3. 이름 바꾸기 : 임포트한 함수나 변수의 이름을 변경하기
import { 변수명 as 변경할이름, 함수명 } from '경로.js';


// 4. 한꺼번에 다루기



// 5.  export default 
// js파일 내에서 단 한버만 사용할 수 있음. 
export default 'codeit';
// 임포트 할 때도 default로 임포트 되는데 이 때 default 그대로는 못쓰고 as로 별칭을 달아줘야한다.
import {default as codeit} from '경로.js';
// as 부분을 생략하고 쓸수도 있다. 
import codeit, {others} from '경로.js';
// 만약 *와일드카드를 써서 임포트 된 경우 와일드카드별칭.default로 사용할 수 있다.
// export 할 때 export default {title, func}; 이런식으로 입력하면 default 객체의 프로퍼티로 변수나 함수를 export 할 수 있다.