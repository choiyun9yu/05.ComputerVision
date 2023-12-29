## 1. 변수
- Boolean: true / false
- null: 의도적으로 값이 입력되어 있지 않음을 나타내는 키워드
- undefined: 값이 정의되어 있지 않는 최상위 속성
- Number: 정수 또는 실수형 숫자
- String: 문자열
- Symbol: 인스턴스가 고유하고 불변인 데이터

### 1-1. 데이터 타입과 관련된 함수
    /* 데이터 타입 확인, 데이터 타입을 문자열로 반환 */
    typeof()

    /* 데이터 타입 캐스팅 */
    Number()  /* 자료형을 숫자로 바꾼다. (자바스크립트는 정수와 실수 구분 안함) */
    String()  /* 자료형을 문자열로 바꾼다. (자바스크립트는 char와 string 구분 안함) */
    Boolean() /* 자료형을 불리언 값으로 바꾼다. 
               * falsy = '', 0,  null, undefined, NaN(Not a Number)
               * !Boolean("false"), Boolean("0") 는 true이다. 문자형이기때문!
               */

### 1-2. var과 let
- var는 변수를 선언하고 let은 블록 스코프 변수를 선언한다.
- 선언지정된 초기값 없이 선언하면 undefined 값을 갖는다.
    - undefined 값은 수치 맥락에서 사용될 땐 NaN으로 변환된다.
    - undefined 값은 불링너 맥락에서 사용될 땐 false값으로 변환된다.
- 선언되지 않은 변수에 접근을 시도하는 경우 ReferenceError 예외가 발생한다.
- undefined는 값이 지정되지 않음을 의미하고 null은 원시값 중 하나로 의도적으로 비어있음을 의미한다.

### 1-3. const
- 블록 스코프 읽기 전용 상수 선언한다.
- 상수는 스크립트가 실행중인 동안 대입을 통해 값을 바꾸거나 재선언될 수 없다. 값으로 초기화해야한다.
- 그러나 상수에 할당된 객체의 속성이나 배열의 요소는 바꿀 수 있다.

### 1-4. hoisting
- JavaScript의 특이한 점은 나중에 변수된 변수더라도 사용할 수 있다. 변수가 최상단으로 끌어올려지기 때문이다.    
  (그러나 끌어올려진 변수는 undefined 값을 반환한다.)
- 심지어 해당 변수가 위에서 참조되었더라도 밑에서 재선언되거나 초기화되면 undefined 값을 반환한다.


## 2. 함수

### 2.1 옵셔널 파라미터(Optional Parameters)

매개 변수에 default 값을 미리 할당해두고 값이 입력되지 않으면 default값이 인자로 들어가는 것이다.

    function funcName (a, b='defaultParam') {...}

## 3. 제어문

### 3.1 if문과 switch문

-   범위를 만족하는 조건 식을 만들 때는 if문이 더 효과적이다.
-   특정 값을 만족하는 조건식을 만들 때는 switch문이 더 효과적이다.  
    (!주의 switch문은 === 를 사용해야한다. switch문은 암묵적인 형 변환을 허용하지 않기 때문이다.)

### 3.2 for문과 while문

-   횟수로 반복하는 것은 for문이 더 효과적이다.
-   조건으로 반복하는 것은 which문이 더 효과적이다.

### 3.3 break와 countinue

-   break : 지금 반복문 탈출해서 더 이상 반복 안하기
-   continue : 지금 반복 탈출하고 다음 반복 계속 이어가기

### 3.4 for (키값 in 객체) 반복문 // 객체랑 좀 더 친함

-   객체의 프로퍼티 수 만큼 반복된다.
-   객체 내 프로퍼티 key name이 변수에 차례대로 전달된다.
-   대괄호 활용법을 이용하면 프로퍼티의 value에도 접근할 수 있다.
-   ex) for k in ojb {
    console.log(k); // 키 값
    console.log(obj[k]); // 밸류 값
    }

### 3.5 for (요소 of 배열) 반복문 // 배열이랑 좀 더 친함

-   반복될 때 마다 배열의 요소가 하나씩 할당된다.
-   python의 반복문과 유사하다.
-   배열의 요소에 대해 반복적인 작업 수행시 적합하다.

## 4. 객체 (순서나 위치보다 프로퍼티 이름이 더 중요할 때 배열보다 더 선호됨)

!주의 객체는 property name이 정수인 것들을 먼저 오름차순 정렬하고, 나머지를 추가한 순서대로 정렬한다.

-   내장객체 : JS가 미리 가지고 있는 객체

### 4.1 날짜 객체

-   날짜 객체 생성  
    let myDate = new Date(); // 이 객체를 생성한 시간이 출력(요일 월 일 년 시간 시간대)  
    let myDate = new Date(밀리초); // 1970년 1월 1일 00:00:00 UTC + 밀리초(1000밀리초 = 1초)  
    let myDate = new Date('2023-07-28T08:24'); // 특정 날짜와 특정 시간으로 Date 객체 생성  
    (시간을 따로 지정하지 않으면 자정을 기준으로 Date객체가 생성된다.)  
    let myDate = new Date(yyyy, mm, dd, hh, mm, ss, ms); // 연도와 월까지만 필수입력
    !주의 mm은 시작값이 0이다. 따라서 1월은 컴퓨터에가 0이다.

-   날짜 객체 정보 검색  
    현재 시간 반환 : Date.now();
    myDate.getTime(); // 해당 날짜 객체가 1970년 1월 1일 00:00:00 UTC 부터 몇 밀리초 지났는지 반환 (타임 스탬프)  
    (!응용) let timeDiff = myDate.getTime() - today.getTime(); 으로 시간 얼마나 지났는지 확인 가능

    -   console.log(myDate.getFullYear()); - console.log(myDate.getMonth()); // 월 정보 0이 1월 - console.log(myDate.getDate()); // 날짜 정보 1이 1일 - console.log(myDate.getDay()); // 요일 정보 0이 일요일 - console.log(myDate.getHours()); - console.log(myDate.getMinutes()); - console.log(myDate.getSeconds()); - console.log(myDate.getMilliseconds());

-   날짜 객체 정보 수정  
    set으로 시작하는 다양한 메서드를 활용하면, 생성된 날짜 객체의 정보를 수정할 수도 있다.
    (대괄호로 감싸진 요소들은 선택적인 요소) - setFullYear(year, [month], [date]) - setMonth(month, [date])
    0 setDate(date) - setHours(hour, [min], [sec], [ms]) - setMinutes(min, [sec], [ms]) - setSeconds(sec, [ms]) - setMilliseconds(ms) - setTime(milliseconds)(1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)

간단하게 시간정보 알아내는 방법 (사용자 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 반환) - let myDate = new Date();  
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)  
console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)  
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)

자동 날짜 수정 : 1월 32일을 입력하면 자동으로 2월 1일로 수정된다.

-   날짜 객체 형 변환  
    let myDate = new Date(2017, 4, 18);  
    console.log(typeof myDate); // object  
    console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)  
    console.log(Number(myDate)); // 1495033200000  
    console.log(Boolean(myDate)); // true

-   날짜 객체 간의 사칙연산
    !주의 number 타입으로 변환한 경우 getTime() 메소드를 활용한 것과 똑같은 수치의 타임 스탬프 값  
    let myDate1 = new Date(2017, 4, 18);  
    let myDate2 = new Date(2017, 4, 19);  
    let timeDiff = myDate2 - myDate1;  
    console.log(timeDiff); // 86400000 (ms)  
    console.log(timeDiff / 1000); // 86400 (sec)  
    console.log(timeDiff / 1000 / 60) // 1440 (min)  
    console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)  
    console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)

## 5. 배열 (순서나 위치가 중요할 때 객체보다 더 선호됨)

### 5.1 배열은 미리 만들어 둔 객체이다. 배열에도 미리 만들어진 메소드들이 있다.

- 배열의 길이 반환 : arr.length;    arr['length'];
- 배열의 마지막 요소에 접근하기 : arr[arr.length-1]'
- 배열에 요소 추가/수정하기 : arr[index] = value;

-   arr.splie : arr.splice(시작인덱스, [삭제할 갯수], [대체값]);

    -   삭제하기 : 삭제 갯수 입력
    -   수정하기 : 삭제 갯수 입력 대체 값 입력
    -   삽입하기 : 삽입위치, 삭제 갯수 0, 대체값 입 력

-   arr.shift() : 배열의 첫 요소 삭제
-   arra.pop() : 배열의 마지막 요소 삭제하고 반환
-   arr.unshift(추가할값) : 배열의 첫 요소로 값 삽입
-   arr.push(추가할값) : 배열의 마지막 요소로 값 추가

-   arr.indexOf(찾으려는값) : 배열에서 특정 값을 찾게 해준다(중복인 경우 가장 앞 인덱스 1개 반환). 포함되어 있지 않다만 -1을 반환한다.
-   arr.lastIndexOf(찾으려는값) : 배열에 특정 값을 찾게 해준다(중복인 경우 가장 뒤 인덱스 1개 반환)
-   arr.includes(찾으려는 값) : 찾으려는 값이 있을 경우 경우 true, 없을 경우 false를 반환한다.

-   arr.reverse() : 배열의 순서를 반대로 뒤집는다.

## 6. 숫자

### 6.1 다양한 숫자 표기법

-   지수 표기법 : 부호 지수 e 가수 // 아주 큰 수나 작은 수 표현에 적합  
    부호는 음수인지 양수인지 나타낸다. 지수는 실수, 가수는 지수에 10의n제곱(만약 -면 10의n제곱만큼 나눈것) 만큼 곱하라는 뜻
-   16진법  
    let hex1= 0xff; // 255
    let hex2= 0xFF; // 255
-   8진법  
    let octal = 0o377; // 255
-   2진법  
    let binary = 0b11111111; // 255
-   !주의 console.log로 찍으면 10지수로 표현됨

### 6.2 숫자형 메소드

-   num.toFixed(1~100) : 소숫점 n번째 자리만큼 고정해주는 메소드, 그 이하는 반올림, 부족한 자리수는 0으로 채워넣음  
    !주의 반환 값은 문자열이다. 숫자로 쓰기 위해서는 앞에 +기호로 표시하거나 Number()함수로 숫자로 바꿔줘야한다.
-   num.toString(2~36) : 파라밑처로 전달하는 숫자의 진법으로 변환해주는 메소드  
    ex) num.toString(2); 는 2진법으로 변환, 역시 반환 값은 문자열이다.
-   숫자에 바로 메소드를 적용하기 위해서는 숫자를 괄호로 묶어주거나, .. 점두개를 사용해야한다. . 점한개는 부동소수점으로 인식하기 때문이다.  
    ex) 255..toString(2);

### 6.3 Math 객체

-   절대값 : Math.abs(num);
-   최댓값 : Math.max(numArr);
-   최솟값 : Math.min(numArr);
-   거듭제곱 : Math.pow(a,b); //a의 b거듭제곱
-   제곱근 : Math.sqrt(num);
-   반올림 : Math.round(num);
-   버림과 올림
    -   올림 : Math.ceil(num);
    -   버림 : Math.floor(num);
-   난수 : Math.random();
-   !JS에서는 Python에서의 // 몫 연산자가 존재하지 않는다. JS몫 연산을 위해서는 나누기 연산자로 연산을 하고 소수점을 버림해주면 된다.!

### 6.4 바보 자바스크립트

-   우리가 일반적으로 사용하는 10진수의 소수 표현을 컴퓨터가 이진수로 변환해 사용하다보면 무한소수가 나오는 경우가 발생한다.  
    무한소루를 해소하기 위해 컴퓨터는 자신이 표현할 수 있는 특정 소수점 자리수에서 반올림해버린다.  
    따라서 컴퓨터 계산에 오차가 발생하기도 한다.
-   해법1 : 우리가 필요한 소숫점 자리에서 반올림하는 toFixed()메소드 사용해서 다시 Number로 바꾸면 된다.  
    해법2 : 필요한 소수점 자릿수 만큼 10의 거듭제곱으로 곱한 뒤 반올림하고, 다시 10의 거듭제곱만큼나눠주면 된다.

## 7. 문자열 심화

### 7.1 문자열 메소드

-   문자열 길이 : str.length;
-   문자열 요소 접근 인덱스 : str[index];  
    str.charAt(index);
-   문자열 요소 탐색 : str.indexOf(찾는값); // 앞에서부터 탐색  
    str.lastIndexOf(찾는값) // 뒤에서부터 탐색

-   대문자/소문자 변환 메소드  
    대문자화 : str.toUpperCase();
    소문자화 : str.toLowerCase();

-   양끝 공백 제거 : str.trim();

-   슬라이싱 : str.slice(시작인덱스, 끝인덱스(미만));
