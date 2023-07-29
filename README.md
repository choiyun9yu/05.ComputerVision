# Javascript

## 1. 변수
### 1.1 데이터 타입
자바 스크립트의 변수는 기본형(primitive)과 참조형(reference) 두 가지가 있다.
자바 스크립트에서 기본형의 식별자와 참조형의 식별자 모두 할당하는 값이 저장된 메모리의 주소값을 참조한다.
이때 만약 기존 메모리에 존재하는 값을 변수에 대입할 경우, 기존재하는 메모리 주소를 참조하고 그렇지 않으면 새로 생성한다.
식별자에게 참조되는 경우를 count로 계산하고 만약 count가 0이 되면 GC에 의해 메모리 해제된다.

기본형과 참조형의 차이는 한 번에 값에 접촉하느냐 두 번에 걸쳐서 접촉하느냐이다.
기본형은 한 번에 해당 값에 바로 접촉할 수 있다. 반면 참조형은 값들을 가지고 있는 메모리의 시작주소와 범위를 갖고, 그 주소에 가서 할당된 값을 얻을 수 있다. 
이렇게 보면 기본형은 할당된 값의 주소를 직접적으로 저장하고 있고, 참조형은 간접적으로 저장하고 있다고 할 수 있다.

### 1.2 가변성(mutable)과 불가변성(immutable)
변수에 값을 할당하고 그 변수의 값을 바꿀 때 가변성과 불가변성을 말하게 된다.
가변과 불가변은 식별자와 할당된 값이 변화를 의미하는 것이 아니다. 불가변성을 띄는 기본형 데이터 타입도 할당된 데이터를 변경할 수 있다.
여기서 말하는 가변성은 할당된 데이터 전체를 변경하는 것이 아니라 부분적으로 변경 가능함을 의미한다.
따라서 기본형은 데이터 값 자체를 새로 배정해야해서 불가변성을 띄고, 참조형은 가지고 있는 데이터의 일부분만 변경할 수 있다는 점에서 가변성을 띈다고 할 수 있다.

### 1.3 복사
자바스크립트에서 복사를 하면 해당 식별자가 가지고 있는 메모리 주소값을 복사하게 된다. 직접적으로 메모리를 참조하는 기본형의 경우 복사한 뒤 원본의 값을 바꾸면 원본이 새로운 주소를 복사하게 되므로 복사본은 원본의 변화에 영향을 받지 않는다.

그러나 참조형의 경우 두 번의 경로를 걸쳐 값에 접근하기 때문에 조금 다르다.
원본 식별자가 가진 주소는 데이터를 가지고 있는 메모리들의 시작주소와 범위이기 때문에 복사한 뒤에 원본 식별자가 데이터 값을 바꾸면 복사본 식별자의 내용도 따라서 바뀌게 된다. 이 문제를 해결하는 방법에는 n가지가 있다.

#### 1.3.2 얕은 복사
얕은 복사는 반복문 등을 사용해서 값을 복사하는 방법이다. 반복문(비효율) 등을 사용해서 참조형 데이터의 각 프로퍼티에 접근하고 그 값을 복사해서 새로운 객체를 만드는 것이다. 그러나 이것의 문제점은 참조형 데이터 내부에 또 다른 참조형 데이터가 있는 경우 경로를 두번 거치게 되므로 위에 발생한 문제가 반복된다.

#### 1.3.3 깊은 복사
얕은 복사의 문제를 해결하기 위해 객체 내부의 객체까지도 복사하는 깊은 복사방법이 있다. 이방법은 복사 함수를 만들고 그 복사 함수를 재귀적으로 표현하여 참조형 데이터 내부에 참조형 데이터를 가진 경우 그 데이터도 한꺼풀 벗겨서 복사하는 깊은 복사 방법을 사용할 수 있다.

만약 객체 내부의 메소드를 제외하고 필드만 복사하고 싶을 때 간단하게 사용할 수 있는 방법도 있다. 객체를 JSON문법으로 표현된 문자열로 전환했다가 다시 JSON객체로 바꾸는 방법이다. (메소드는 문자열 전환시 그 의미를 담으면서 변환할 수 없어서 안되는 것 같다.)
- ex) JSON.parse(JSON.stringify(target));

### 1.4 undefined와 null
둘 모두 값이 없다는 것을 표현할 때 사용한다. 그러나 그 의미는 조금 다르다.
- null : 의도적으로 값이 없다는 것을 표현할 때 사용한다.
- undefined : 할당된 값이 없다는 것을 확인할 때 사용된다. (값이 주어지지 않은 변수에 기본적으로 할당)

### 1.5 다양한 숫자 표기법
- 지수 표기법 : 부호 지수 e 가수  
부호는 음수인지 양수인지 나타낸다. 지수는 실수, 가수는 지수에 10의n제곱(만약 -면 10의n제곱만큼 나눈것) 만큼 곱하라는 뜻


## 2. 함수

### 2.1 옵셔널 파라미터(Optional Parameters)
매개 변수에 default 값을 미리 할당해두고 값이 입력되지 않으면 default값이 인자로 들어가는 것이다.
- function funcName (a, b='defaultParam') {...}


## 3. 제어문

### 3.1 if문과 switch문
- 범위를 만족하는 조건 식을 만들 때는 if문이 더 효과적이다.
- 특정 값을 만족하는 조건식을 만들 때는 switch문이 더 효과적이다.  
(!주의 switch문은 === 를 사용해야한다. switch문은 암묵적인 형 변환을 허용하지 않기 때문이다.)

### 3.2 for문과 while문
- 횟수로 반복하는 것은 for문이 더 효과적이다.
- 조건으로 반복하는 것은 which문이 더 효과적이다.

### 3.3 break와 countinue
- break : 지금 반복문 탈출해서 더 이상 반복 안하기
- continue : 지금 반복 탈출하고 다음 반복 계속 이어가기

### 3.4 for (키값 in 객체) 반복문   // 객체랑 좀 더 친함
- 객체의 프로퍼티 수 만큼 반복된다.
- 객체 내 프로퍼티 key name이 변수에 차례대로 전달된다.
- 대괄호 활용법을 이용하면 프로퍼티의 value에도 접근할 수 있다.
- ex) for k in ojb {
    console.log(k);         // 키 값
    console.log(obj[k]);    // 밸류 값
} 

### 3.5 for (요소 of 배열) 반복문   // 배열이랑 좀 더 친함
- 반복될 때 마다 배열의 요소가 하나씩 할당된다. 
- python의 반복문과 유사하다.
- 배열의 요소에 대해 반복적인 작업 수행시 적합하다.


## 4. 객체 (순서나 위치보다 프로퍼티 이름이 더 중요할 때 배열보다 더 선호됨)
!주의 객체는 property name이 정수인 것들을 먼저 오름차순 정렬하고, 나머지를 추가한 순서대로 정렬한다.
- 내장객체 : JS가 미리 가지고 있는 객체

### 4.1 날짜 객체
- 날짜 객체 생성   
let myDate = new Date();    // 이 객체를 생성한 시간이 출력(요일 월 일 년 시간 시간대)  
let myDate = new Date(밀리초);    // 1970년 1월 1일 00:00:00 UTC + 밀리초(1000밀리초 = 1초)  
let myDate = new Date('2023-07-28T08:24');   // 특정 날짜와 특정 시간으로 Date 객체 생성  
(시간을 따로 지정하지 않으면 자정을 기준으로 Date객체가 생성된다.)  
let myDate = new Date(yyyy, mm, dd, hh, mm, ss, ms);    // 연도와 월까지만 필수입력
!주의 mm은 시작값이 0이다. 따라서 1월은 컴퓨터에가 0이다.

- 날짜 객체 정보 검색  
현재 시간 반환 : Date.now(); 
myDate.getTime();   // 해당 날짜 객체가 1970년 1월 1일 00:00:00 UTC 부터 몇 밀리초 지났는지 반환 (타임 스탬프)  
(!응용) let timeDiff = myDate.getTime() - today.getTime(); 으로 시간 얼마나 지났는지 확인 가능  
    - console.log(myDate.getFullYear());
    - console.log(myDate.getMonth());   // 월 정보  0이 1월
    - console.log(myDate.getDate());    // 날짜 정보 1이 1일
    - console.log(myDate.getDay());     // 요일 정보 0이 일요일
    - console.log(myDate.getHours());
    - console.log(myDate.getMinutes());
    - console.log(myDate.getSeconds());
    - console.log(myDate.getMilliseconds());   

- 날짜 객체 정보 수정  
set으로 시작하는 다양한 메서드를 활용하면, 생성된 날짜 객체의 정보를 수정할 수도 있다.
    (대괄호로 감싸진 요소들은 선택적인 요소)
    - setFullYear(year, [month], [date])
    - setMonth(month, [date])
    0 setDate(date)
    - setHours(hour, [min], [sec], [ms])
    - setMinutes(min, [sec], [ms])
    - setSeconds(sec, [ms])
    - setMilliseconds(ms)
    - setTime(milliseconds)(1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)  

간단하게 시간정보 알아내는 방법 (사용자 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 반환)
    - let myDate = new Date();  
    console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)  
    console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)  
    console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)  

자동 날짜 수정 : 1월 32일을 입력하면 자동으로 2월 1일로 수정된다.  

- 날짜 객체 형 변환  
let myDate = new Date(2017, 4, 18);  
console.log(typeof myDate); // object  
console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)  
console.log(Number(myDate)); // 1495033200000  
console.log(Boolean(myDate)); // true  

- 날짜 객체 간의 사칙연산
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

- arr.splie : arr.splice(시작인덱스, [삭제할 갯수], [대체값]);
    - 삭제하기 : 삭제 갯수 입력
    - 수정하기 : 삭제 갯수 입력 대체 값 입력
    - 삽입하기 : 삽입위치, 삭제 갯수 0, 대체값 입 력 

- arr.shift() : 배열의 첫 요소 삭제
- arra.pop() : 배열의 마지막 요소 삭제하고 반환
- arr.unshift(추가할값) : 배열의 첫 요소로 값 삽입
- arr.push(추가할값) : 배열의 마지막 요소로 값 추가

- arr.indexOf(찾으려는값) : 배열에서 특정 값을 찾게 해준다(중복인 경우 가장 앞 인덱스 1개 반환). 포함되어 있지 않다만 -1을 반환한다.
- arr.lastIndexOf(찾으려는값) : 배열에 특정 값을 찾게 해준다(중복인 경우 가장 뒤 인덱스 1개 반환) 
- arr.includes(찾으려는 값) : 찾으려는 값이 있을 경우 경우 true, 없을 경우 false를 반환한다.

- arr.reverse() : 배열의 순서를 반대로 뒤집는다.





