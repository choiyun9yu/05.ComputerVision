# Javascript

## 1. 변수
## 1-1. 데이터 타입
- Boolean: true / false
- null: 의도적으로 값이 입력되어 있지 않음을 나타내는 값
- undefined: 값이 정의되어 있지 않는 최상위 속성
- Number: 정수 또는 실수형 숫자
- String: 문자열
- Symbol: 다른 어떤 값과 비교해도 true가 될 수 없는 고유한 값
######
- object: 객체
######
    obj.proper = value; /* 프로퍼티 추가 */
    delete obj.proper;  /* 프로퍼티 삭제 */
    proper in obj;      /* 프로퍼티 조회 */

### 1-2. var과 let
- var는 변수를 선언하고 let은 블록 스코프 변수를 선언한다.
- 선언지정된 초기값 없이 선언하면 undefined 값을 갖는다.
    - undefined 값은 수치 맥락에서 사용될 땐 NaN으로 변환된다.
    - undefined 값은 불린 맥락에서 사용될 땐 false값으로 변환된다.
- 선언되지 않은 변수에 접근을 시도하는 경우 ReferenceError 예외가 발생한다.

### 1-3. const
- 블록 스코프 읽기 전용 상수 선언한다.
- 상수는 스크립트가 실행중인 동안 대입을 통해 값을 바꾸거나 재선언될 수 없다. 값으로 초기화해야한다.
- 그러나 상수에 할당된 객체의 속성이나 배열의 요소는 바꿀 수 있다.

### 1-4. hoisting
- JavaScript의 특이한 점은 나중에 변수된 변수더라도 사용할 수 있다. 변수가 최상단으로 끌어올려지기 때문이다.    
  (그러나 끌어올려진 변수는 undefined 값을 반환한다.)
- 심지어 해당 변수가 위에서 참조되었더라도 밑에서 재선언되거나 초기화되면 undefined 값을 반환한다.

### 1-5. 데이터 타입 관련 함수
   
    typeof()  /* 데이터 타입 확인, 데이터 타입을 문자열로 반환 */
              /* typeof 연산자로 null을 검사하면 object 반환 */
              /* typeof 연산자로 함수를 검사하면 function 반환 */

    Number()  /* 자료형을 숫자로 바꾼다. (자바스크립트는 정수와 실수 구분 안함) */
    String()  /* 자료형을 문자열로 바꾼다. (자바스크립트는 char와 string 구분 안함) */
    Boolean() /* 자료형을 불리언 값으로 바꾼다. */

- falsy = ' ', 0,  null, undefined, NaN(Not a Number)  

<br>
<br>

## 2. 함수


## 3. 제어문
