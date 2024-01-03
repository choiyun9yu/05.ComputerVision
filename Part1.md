# Javascript Part1

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
    obj.proper = value; // 프로퍼티 추가 
    delete obj.proper;  // 프로퍼티 삭제 
    proper in obj;      // 프로퍼티 조회 

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
   
    typeof()  // 데이터 타입 확인, 데이터 타입을 문자열로 반환 
              // typeof 연산자로 null을 검사하면 object 반환 
              // typeof 연산자로 함수를 검사하면 function 반환 

    Number()  // 자료형을 숫자로 바꾼다. (자바스크립트는 정수와 실수 구분 안함) 
    String()  // 자료형을 문자열로 바꾼다. (자바스크립트는 char와 string 구분 안함) 
    Boolean() // 자료형을 불리언 값으로 바꾼다. 

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
  
    // 예제 1 숫자가 양수인지 음수인지 판별 
    const number = 5;
    const result = number > 0 ? '양수' : '음수';
    console.log(result); // 양수

    // 예제 2 조건에 따라 함수 실행 
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
- rest 파라미터는 함수 파라미터 리스트에서 마지막에 위치해야 한다.
- rest 파라미터는 항상 나머지 인자들을 배열로 수집한다.
- rest 파라미터는 함수가 가변 개수의 인자를 다루거나 나머지 인자들을 간결하게 수집하고자 할 때 특히 유용하다.
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
- 화살표 함수 에서 this는 화살표 함수가 동작하기 직전의 this 이다.
- 화살표 함수가 새로운 영역을 만들어 내지 않기 때문이다.
######
    (number) => {
      ...
    }

    // 파라미터가 하나인 경우 소괄호 생략 가능 
    number => {
      ...
    }

    // 내부 동작이 return문 하나인 경우 중괄호와 return 생략 가능 
    (a, b) => a + b;
  
      // 단, 리턴 값이 객체인 경우 리턴과 중괄호를 생략하고 싶으면 객체를 소괄호로 한 번 감싸야 한다. 
      const getNumber = (number) => ({name: number})

#### 객체 반환하기(화살표 함수에서)
- 객체를 반환하려면 객체를 괄호로 둘러싸야 한다. (중괄호를 객체영역이 아닌 함수 영역으로 착각할 수 있기 때문)
######
    const person = (firstName, lastName) => (
        {
            fist: fistName,
            last: lastName.
        };
        )

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



## 5. 에러
- 자바스크립트는 에러가 발생하면 에러에 대한 정보가 담긴 에러 객체를 생성한다.
- 에러 객체에는 에러 name 프로퍼티와, 에러 내용을 담고 있는 message 프로퍼티가 존재한다.
- 자주 발생하는 에러: ReferenceError, TypeError, SyntaxError(문법 에러는 코드 실행하기도 전에 에러 발생시킨다.)
- 예외처리는 실행이 가능한 에러를 다루기 때문에 문법 에러는 예외처리로 다룰 수 없다.

#### 의도적으로 발생시킨 에러 예제

    const error = new TypeError('타입 에러가 발생했습니다.');   // 에러 정의하는 코드 
    throw error;                                          // 에러 발생시키는 코드 

    try {
      ...
    } 
    // 에러 발생시 생성되는 error 객체가 cath 문의 파라미터로 전달. 이름은 e, err, 뭐로 짓든 상관 없음
    catch (error) { 
        // 에러가 발생했을 때 동작할 코드
        console.error(e);       
        console.log(e.name);
        console.log(e.message);
    }

<br>
<br>

## 6. 모듈 문법 

### 6-1. 모듈 스코프
- HTML에서 script 파일들을 불러모으면 서로 다른 파일에 js 코드가 존재하지만 마치 하나의 파일인 것 처럼 스코프를 공유한다.
- HTML에서 <script type="module" src="fileName.js"></script> type 을 모듈로 지정 해줘야 한다.
- 에러가 뜨지 않으려면 서버에서 html 파일을 실행하도록 해야한다. (live server 익스텐션 깔고 go live 하면 해결)

### 6-2. 모듈 문법
    // 특정 조건하에 다른 파일에서도 접근할 수 있게 export
    export const 변수명 = 'value';   
    
    // 사용하고자 하는 js 파일에서 import
    import { 변수명, 함수명 } from '경로.js';

    // 이름 바꿔서 import 
    import { 변수명 as 변경할이름, 함수명 } from '경로.js';


### 6-3. 한꺼번에 다루기
    export { 변수명, 함수명 };  

    import * as 모듈이름 from '경로.js';
    모듈이름.변수명
    모듈이름.함수명


### 6-4. export default
    // export default는 js 파일 내에서 단 한번만 사용 가능 
    export default something;

    // import 할 때 defualt로 import 되기 때문에 as로 별칭 달아서 사용 
    import { default as 별칭 } from '경로.js'; 

    // as 생략 가능 
    import 별칭 from '경로.js';

<br>
<br>

## 7. 기타 모던 자바스크립트 문법 

### 7-1. 스프레드 구문
- 배열의 요소를 하나씩 펼쳐 준다.
######
    const numbers = [1, 2, 3];
    console.log(...numbers);        // 대괄호가 벗겨지고 각각의 개별 값으로 펼처준다.
#### 기본 배열 복사 
- 기본 배열 복사는 참조 값을 복사해서 복사체에 변화를 주면 본체에 영향을 미친다.
######
    const webPublishing = ['HTML', 'CSS'];
    const interactiveWeb = webPublishing;

    interactiveWeb.push('JavaScript');

    console.log(webPublishing);     // ['HTML', 'CSS', 'JavaScript']
    console.log(interactiveWeb);    // ['HTML', 'CSS', 'JavaScript']
#### 슬라이스 배열 복사
- 본체에 영향을 주지 않는 복사 방법 1
######
    const webPublishing = ['HTML', 'CSS'];
    const interactiveWeb = webPublishing.slice();   

    interactiveWeb.push('JavaScript');

    console.log(webPublishing);     // ['HTML', 'CSS']
    console.log(interactiveWeb);    // ['HTML', 'CSS', 'JavaScript']
#### 스프레드 배열 복사 
- 본체에 영향을 주지 않는 복사 방법 2
######
    const webPublishing = ['HTML', 'CSS'];
    const interactiveWeb = [...webPublishing, 'JavaScript'];

    console.log(webPublishing);     // ['HTML', 'CSS']
    console.log(interactiveWeb);    // ['HTML', 'CSS', 'JavaScript']
#### 스프레드 배열 병합
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const arr3 = [...arr1, ...arr2];
    console.log(arr3);  // [1, 2, 3, 4, 5, 6]
#### 스프레드 구문으로 배열을 객체로 만들기 
- 스프레드를 { }로 감싸서 객체로 만들면 인덱스를 key값으로, 배열의 요소를 value로 하는 객체가 만들어진다.
######
    const arr = ['hello', 'world'];
    const obj = { ...arr }; // {0:'hello', 1:'world'};

### 7-2. 모던한 프로퍼티 표기법 
    const title = 'Codeit';
    const birth = 2017;
    const job = '프로그래밍 강사';

    // 프로퍼티의 이름과, 변수의 이름이 같은 경우 아래 처럼 생략해서 객체 생성 가능
    // 필드값 뿐만아니라 메소드도 생략가능
    const user = {  
        title,      
        birth,
        job,

        // 메소드 축약형 표현
        funcName() { 
            return 'something'
        }
    }

### 7-3. 계산된 프로퍼티
#### 형식
    const user = {
       [표현식] : 값,
     }
#### 예제 
    const propertyName = 'birth';
    const getJob = () => 'job';

    const user = {
        ['Code' + 'it']: 'value',   // 연산식을 대괄호로 묶으면 연산 값이 프로퍼티 이름이 된다.
        [propertyName]: 2017,       // 변수를 대괄호로 묶으면 변수 값이 프로퍼티 이름이 된다.
        [getJob()]: '프로그래밍 강사'  // 함수를 대괄호로 묶으면 함수 리턴 값이 프로퍼티 이름이 된다.
    };

### 7-4. 옵셔널 체이닝(Optional Chaining)
- 옵셔널 체이닝은 프로퍼티나 메서드를 안전하게 접근하기 위한 기능이다. 
- 객체의 중첩된 구조에서 특정 프로퍼티나 메서드가 존재하는지 확인하고, 해당 프로퍼티나 메서드가 존재하지 않으면 에러를 발생시키지 않고 undefined를 반환한다. 
- 옵셔널 체이닝 연산자: **?.**
######
    const user = {
      id: 1,
      name: 'John',
      address: {
        city: 'New York',
        zipcode: '10001'
      }
    };
    
    // 일반적인 방법
    const city = user.address ? user.address.city : undefined;
    console.log(city);                    // 'New York'
    
    // 옵셔널 체이닝 사용
    const cityOptionalChaining = user.address?.city;
    console.log(cityOptionalChaining);    // 'New York'
    
    // 존재하지 않는 프로퍼티에 대한 옵셔널 체이닝
    const countryOptionalChaining = user.address?.country;
    console.log(countryOptionalChaining); // undefined

### 7-5. 구조 분해(Destructuring)

#### 배열 
- 변수 명을 배열형태로 주면 배열을 분해해서 하나씩 할당해 준다. 
######
    const rank = ['효준', '유나', '민환', '재하', '규식'];
    const macbook = rank[0];  // 효준
    const ipad = rank[1]      // 유나
    const airpods = rank[2]   // 민환
    const coupon = rank[3]    // 재하
    const [macbook, ipad, airpods, coupon] = rank; 
    
    // 넘치는 요소는 coupon 배열로 할당 
    const rank = ['효준', '유나', '민환', '재하', '규식'];
    const [macbook, ipad, airpods, ...coupon] = rank;
    
    const rank = ['유나', '효준', '민환'];
    const [macbook, ipad, airpods, coupon = '없음'] = rank;
    
    // 배열간의 변수 값 스왑 
    [macbook, ipad] = [ipad, macbook]   

#### 객체
- 배열 분해시 [ ] 사용하고, 객체 분해시 { } 사용한다.
##### 
        const macbook = {
            title: '맥북 프로 16형',
            price: 3690000,
            memory: '16GB',
            storage: '1TB SSD 저장 장치',
            display: '16형 Retina 디스플레이',
        };

        const title = macbook.title;
        const price = macbook.price;

        const { title, price } = macbook;                 // 변수이름과 객체 내 프로퍼티 이름 매칭해서 분해
        const { title, ...rest } = macbook;               // 앞쪽에 우선 매칭되는 프로퍼티 할당하고 나머지는 rest에 할당
        const { title, color = 'silver' } = macbook;      // 객체 내 프로퍼티가 없는 변수이름이 있으면  undefined를 출력하고, 기본 값을 설정해둘 수도 있다.
        const { title: product, price: cost } = macbook;  // 객체 내 title을 product 변수에 할당, 객체 내 price 프로퍼티를 cost 변수에 할당.
    }
