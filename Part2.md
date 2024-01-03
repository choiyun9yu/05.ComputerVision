# Javascript Part2

## 1. number 

### 1-1. 숫자 표기법
    // 2진법  
    let binary = 0b11111111; // 255

    // 8진법  
    let octal = 0o377; // 255

    // 16진법  
    let hex1= 0xff; // 255
    let hex2= 0xFF; // 255

    !주의 console.log로 찍으면 모두 10진법으로 표현된다.

### 1-2. 숫자형 메소드
#### num.toFixed(1~100)
- 소숫점 n번째 자리만큼 고정해주는 메소드 (그 이하는 반올림, 부족한 자리수는 0으로 채움)
- !주의 반환 값은 문자열이다. 숫자로 쓰기 위해서는 앞에 +기호로 표시하거나 Number()함수로 숫자로 바꿔 줘야 한다.
#### num.toString(2~36) 
- 파라미터로 전달하는 숫자의 진법으로 변환해주는 메소드  
######
    // 2진법으로 변환, 역시 반환 값은 문자열이다.
    num.toString(2); 

    // 숫자에 바로 메소드를 적용하기, 역시 반환 값은 문자열이다. 
    255..toString(2);

### 1-3. Math 객체
-   절대값 : **Math.abs(num);**
-   최댓값 : **Math.max(numArr);**
-   최솟값 : **Math.min(numArr);**
-   거듭제곱 : **Math.pow(a,b);** //a의 b거듭제곱
-   제곱근 : **Math.sqrt(num);**
-   반올림 : **Math.round(num);**
-   버림과 올림
    -   올림 : **Math.ceil(num);**
    -   버림 : **Math.floor(num);**
-   난수 : **Math.random();**  

JS에서는 Python에서의 // 몫 연산자가 존재하지 않는다.   
JS몫 연산을 위해서는 나누기 연산자로 연산을 하고 소수점을 버림 해야 한다.

### 1-4. 바보 자바스크립트
- 우리가 일반적으로 사용하는 10진수의 소수 표현을 컴퓨터가 이진수로 변환해 사용하다보면 무한소수가 나오는 경우가 발생한다.  
- 무한소수 문제를 해소하기 위해 컴퓨터는 자신이 표현할 수 있는 특정 소수점 자리수에서 반올림해버린다. 
- 이것 때문에 컴퓨터 계산에 오차가 발생하기도 한다.
######
- 해법1: 우리가 필요한 소숫점 자리에서 반올림하는 toFixed()메소드 사용해서 다시 Number로 바꾸면 된다.  
- 해법2: 필요한 소수점 자릿수 만큼 10의 거듭제곱으로 곱한 뒤 반올림하고, 다시 10의 거듭제곱만큼나눠주면 된다.

<br>
<br>

## 2. string

### 문자열 메소드
- 문자열 길이 : **str.length;**
- 문자열 요소 접근 인덱싱
  - **str[index];** 
  - **str.charAt(index);**
- 슬라이싱 : **str.slice(시작인덱스, 끝인덱스(미만));**
- 문자열 요소 탐색
  - **str.indexOf(찾는값);** // 앞에서부터 탐색
  - **str.lastIndexOf(찾는값)** // 뒤에서부터 탐색
- 대문자/소문자 변환 메소드  
  - 대문자화 : **str.toUpperCase();**
  - 소문자화 : **str.toLowerCase();**
- 양끝 공백 제거 : **str.trim();**


<br>
<br>

## 3. 배열 
- 순서나 위치가 중요할 때 객체보다 더 선호된다.
- 배열은 미리 만들어 둔 객체이다. 배열에도 미리 만들어진 메소드들이 있다.

- 배열의 길이 반환
  - **arr.length;**    
  - **arr['length'];**
- 배열 인덱싱
  - 배열의 마지막 요소에 접근하기 : **arr[arr.length-1]'**
  - 배열에 요소 추가/수정하기 : **arr[index] = value;**
- 배열 슬라이싱 : **arr.splice(시작인덱스, [삭제할 갯수], [대체값]);**
    -   삭제하기 : 삭제 갯수 입력
    -   수정하기 : 삭제 갯수 입력 대체 값 입력
    -   삽입하기 : 삽입위치, 삭제 갯수 0, 대체값 입력
- 배열 검색
    - 배열 검색1 : **arr.indexOf(찾으려는값);**      // 중복인 경우 가장 앞 인덱스 반환, 없으면 -1 반환
    - 배열 검색2 : **arr.lastIndexOf(찾으려는값);**  // 중복인 경우 가장 뒤 인덱스 반환,
    - 배열 검색3 : **arr.includes(찾으려는 값);**    // 있으면 true 없으면 false
- 배열 순서 반대로 : **arr.reverse();**
######
- 배열의 마지막 요소로 값 추가 : **arr.push(추가할값)**
- 배열의 마지막 요소 삭제하고 반환 : **arr.pop()**

- 배열의 첫 요소 삭제 : **arr.shift();**
- 배열의 첫 요소로 값 삽입 : **arr.unshift(추가할값)**

<br>
<br>

## 4. 날짜 객체

### 4-1. 날짜 객체 생성  
    // 이 객체를 생성한 시간이 출력(요일 월 일 년 시간 시간대)  
    let myDate = new Date();        

    // 1970년 1월 1일 00:00:00 UTC + 밀리초(1000밀리초 = 1초)  
    let myDate = new Date(밀리초);
    
    // 특정 날짜와 특정 시간으로 Date 객체 생성  
    let myDate = new Date('2023-07-28T08:24'); 

    // 연도와 월까지만 필수입력, 시간을 따로 지정하지 않으면 자정을 기준으로 Date객체가 생성된다. 
    let myDate = new Date(yyyy, mm, dd, hh, mm, ss, ms);
- 자동 날짜 수정 : 1월 32일을 입력하면 자동으로 2월 1일로 수정된다.

### 4-2. 날짜 객체 정보 검색  
    // 현재 시간 반환
    Date.now();
    
    // 해당 날짜 객체가 1970년 1월 1일 00:00:00 UTC 부터 몇 밀리초 지났는지 반환 (타임 스탬프)
    myDate.getTime();   

    // 시간 얼마나 지났는지 확인
    let timeDiff = myDate.getTime() - today.getTime();

    // 날짜 정보 검색 
    myDate.getFullYear(); 
    myDate.getMonth();     // 월 정보 0이 1월
    myDate.getDate();      // 날짜 정보 1이 1일
    myDate.getDay();       // 요일 정보 0이 일요일
    myDate.getHours();
    myDate.getMinutes()) 
    myDate.getSeconds();
    myDate.getMilliseconds();

### 4-3. 날짜 객체 형 변환  
    let myDate = new Date(2017, 4, 18);  
    console.log(typeof myDate);     // object  
    console.log(String(myDate));    // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)  
    console.log(Number(myDate));    // 1495033200000  
    console.log(Boolean(myDate));   // true

### 4-4. 날짜 객체 간의 사칙연산
    !주의 number 타입으로 변환한 경우 getTime() 메소드를 활용한 것과 똑같은 수치의 타임 스탬프 값  
    
    let myDate1 = new Date(2017, 4, 18);  
    let myDate2 = new Date(2017, 4, 19);  
    let timeDiff = myDate2 - myDate1;  
    
    console.log(timeDiff);                          // 86400000 (ms)  
    console.log(timeDiff / 1000);                   // 86400 (sec)  
    console.log(timeDiff / 1000 / 60);              // 1440 (min)  
    console.log(timeDiff / 1000 / 60 / 60);         // 24 (hour)  
    console.log(timeDiff / 1000 / 60 / 60 / 24);    // 1 (date)

### 4-5. 날짜 객체 정보 수정  
set으로 시작하는 다양한 메서드를 활용하면, 생성된 날짜 객체의 정보를 수정할 수도 있다.
- 연도 수정: **setFullYear(year, [month], [date])** 
- 달 수정: **setMonth(month, [date])**
- 날짜 수정: **setDate(date)** 
- 시간 수정: **setHours(hour, [min], [sec], [ms])** 
- 분 수정: **setMinutes(min, [sec], [ms])** 
- 초 수정: **setSeconds(sec, [ms])** 
- 밀리초 수정: **setMilliseconds(ms)** 
- **setTime(milliseconds)** // 1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜 설정

### 4-6. 간단하게 시간정보 알아내는 방법 
    let myDate = new Date();  
    console.log(myDate.toLocaleString());     // 년. 월. 일 시:분:초  
    console.log(myDate.toLocaleDateString()); // 년. 월. 일  
    console.log(myDate.toLocaleTimeString()); // 시:분:초








