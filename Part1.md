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

## 2. 연산자

### 2-1. 기본 연산자

### 2-2. 논리 연산자 
- and(&&): 왼쪽값이 Truthy 하면 오른쪽 값을 리턴하고, 왼쪽값이 Falsy 하면 그대로 왼쪽 값을 리턴한다.
- or(||): 왼쪽값이 Truthy 하면 왼쪽값을 리턴하고, 왼쪽값이 Falsy 하면 오른쪽 값을 리턴한다.
- 연산자 우선순위는 and가 높다. 그러나 소괄호로 의도 표시하는게 좋은 습관 이다.
  
### 2-3. null 병합 연산자 (??)
- 물음표 두개를 사용해서 null 혹은 undefined 값을 가려내는 연산자
- 연산자의 왼편 값이 null 이거나 undefined라면 오른쪽 값 리턴
- 왼편 값이 null 이거나 undefined가 아니라면 왼쪽 값 리턴
######
      const example1 = null ?? 'I';               // I
      const example2 = undefined ?? 'love';       // love
      const example3 = 'Codeit' ?? 'JavaScript';  // Codeit

### 2-4. 3항 연산자 
- 조건문을 간결하게 표현할 때 사용된다.
###### 
    condition ? expressionIfTrue : expressionIfFalse;
  
    /* 예제 1 숫자가 양수인지 음수인지 판별 */
    const number = 5;
    const result = number > 0 ? '양수' : '음수';
    console.log(result); // 양수

    /* 예제 2 조건에 따라 함수 실행 */
    const isEven = num => num % 2 === 0;
    const numberToCheck = 7;
    const message = isEven(numberToCheck) ? '짝수입니다.' : '홀수입니다.';
    console.log(message); // 홀수입니다.

<br>
<br>

## 3. 함수

### 3-1. 함수 선언식 : 호이스팅 O
- 함수 선언식에 포함된 함수는 스코프가 그 함수 안에 갇히지만 다른 블록에 선언된 함수는 불러올 수 있다.
######
    function func1(param) {
      console.log(param);
    }

### 3-2. 함수 표현식 : 호이스팅 X
- 함수선언은 결국 함수를 값처럼 사용하는 것이다. 
- 함수 표현식은 할당된 변수에 따라서 그 스코프가 결정된다.
######
    const func2 = function (param) { 
        console.log(param);
    }   

### 3-3. 옵셔널 파라미터 (Optional Parameter)
- 매개 변수에 default 값을 미리 할당해두고 값이 입력되지 않으면 default값이 인자로 들어가는 것이다.
######
    function funcName (a, b='defaultParam') {
      ...
    }

### 3-4. 레스트 파라미터 (Rest Parameter)
- 일반 파라미터 앞에 마침표 3개를 붙여서 인자를 배열로 받는 것이다.   
  (일반 파라미터와 함께 사용 가능)
######
    function func1(...args) { 
         for (const arg of args) { 
             console.log(arg);
         }
         console.log('-----------')
     };

### 3-5. 화살표 함수 (Arrow Function)
- 이름이 없는 익명 함수다. 
- 다른 함수의 아규먼트로 선언할 때 주로 사용된다.  
- 화살표 함수에서는 arguments 객체를 사용할 수 없다. (rest parameter는 가능)  
- 화살표함수 에서 this는 화살표 함수가 동작하기 직전의 this 이다.
######
    (number) => {
      ...
    }

    /* 파라미터가 하나인 경우 소괄호 생략 가능 */
    number => {
      ...
    }

    /* 내부 동작이 return문 하나인 경우 중괄호와 return 생략 가능 */
    (a, b) => a + b;
  
      /* 단, 리턴 값이 객체인 경우 리턴과 중괄호를 생략하고 싶으면 객체를 소괄호로 한 번 감싸야 한다. */
      const getNumber = (number) => ({name: number})

### 3-6. 즉시 실행 함수(IIFE, Immediately Invoked Function Expression))
- 함수를 정의하고 즉시 실행하는 패턴이다. (전역 스코프를 요염시키지 않고 변수를 보호하고자 할 때 유용)
- 함수 선언 부분을 소괄호로 감싼 다음 바로 뒤에 소괄호를 한번더 붙인다.
- 바로 뒤에 한번더 붙인 소괄호를 통해 인자를 전달할 수 있다. 
- 함수명을 선언해도 외부에서 호출할 수 없다.
######
    (function (x, y) {
        console.log(x + y);
    })(3, 5);

<br>
<br>

## 4. 제어문

### 4.1 if문과 switch문
- if:  범위를 만족하는 조건 식을 만들 때 더 효과적이다.
- switch: 특정 값을 만족하는 조건식을 만들 때 더 효과적이다.
#### if 문
    const score = 85;

    if (score >= 90) {
      console.log('A');
    } else if (score >= 80) {
      console.log('B');
    } else if (score >= 70) {
      console.log('C');
    } else if (score >= 60) {
      console.log('D');
    } else {
      console.log('F');
    }
#### switch 문 (switch문은 === 를 사용해야한다. switch문은 암묵적인 형 변환을 허용하지 않기 때문)
    // 예제: 요일에 따른 메시지 출력
    const dayOfWeek = 'Monday';
    
    switch (dayOfWeek) {
      case 'Monday':
        console.log('It\'s Monday! Have a great start to the week.');
        break;
      case 'Tuesday':
        console.log('Happy Tuesday!');
        break;
      case 'Wednesday':
        console.log('Hump Day! Almost there.');
        break;
      case 'Thursday':
        console.log('Thursday vibes!');
        break;
      case 'Friday':
        console.log('Cheers to the weekend!');
        break;
      default:
        console.log('Enjoy the weekend!');
    }


### 4.2 for문과 while문
#### for: 횟수로 반복하는 경우 더 효과적이다.
    // 예제: 5번(횟수) 출력
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }

#### while: 조건으로 반복하는 경우 더 효과적이다.
    // 예제: 5 이하인 경우(조건) 출력
    let j = 1;
    
    while (j <= 5) {
      console.log(j);
      j++;
    }

### 4.3 break와 countinue
- break : 지금 반복문 탈출해서 더 이상 반복 안하기(switch 문도 같음)
- continue : 지금 반복 탈출하고 다음 반복 계속 이어가기

### 4.4 for of 반복문, 배열의 요소를 열거할 때 사용
-   반복될 때 마다 배열의 요소가 하나씩 할당된다.
######
    for (const element of array) {
      console.log(element);
    }

### 4.5 for in 반복문, 객체의 속성을 열거할 때 사용 
- 객체의 프로퍼티 수 만큼 반복된다.
######
    for (const key in object) {
      console.log(key);         // 키 값
      console.log(object[key]); // 밸류 값
    }

<br>
<br>

## 5. 배열(Array)

<br>
<br>

## 6. 객체(Object)

<br>
<br>