# Javascript Part3
함수형 프로그래밍을 위한 Javascript 문법 

## 1. 들어가기 전에

### 1-1. Tool

#### 리엑트 개발자도구

리액트컴포넌트 트리를 들여다볼 수 있고, 심지어 프로덕션에서 리액트를 실행하는 경우도 내부를 살펴볼 수 있게 해준다. 이런 도구는 다른 프로젝트에서 리액트가 어떻게 쓰이는지 배우거나 디버깅 할 때 아주 유용하다.

#### Node.js

브라우저 없이 JavaScript 실행할 수 있게 해준다.

#### npm

Node를 설치하면 자동으로 같이 설치되는 노드 패키지 관리자이다.

    # pacakge.json 파일이 있는 경로에서
    $ npm install     // npm이 프로젝트에 필요한 모든 패키지 설치

    # 만약 새로운 프로젝트를 밑바닥 부터 시작하려면
    $ npm init -y     // 프로젝트를 초기화하고 package.json 파일 생성
    $ npm install [패키지이름]
    $ npm remove [패키지이름]

#### yarn

    $ npm install -g yarn       // 얀설치
    $ yarn add [패키지이름]      // 패키지 설치
    $ yarn remove [패키지이름]   // 패키지 삭제

## 2. JavaScript

### 2-1. 변수 선언하기

#### var : ES2015 이전에 변수를 선언하는 유일한 방법

var는 호이스팅(Hoisting)을 지원해서 스코프 안에 존재하는 모든 선언들을 해당 스코프의 최상단으로 끌어올린다.  
또한 var는 스코프의 제한을 받지 않아서 조건문 내에서 변경하면 조건문 밖의 변수에도 영향을 미친다.

    # if 블록 안의 topic을 변경하면 if 블록 바깥의 topic도 바뀜 (for문도 마찬가지)
    var topic = "자바스크립트";

    if (topic) {
        var topic = "리액트";
        console.log('블록', topic); // 리전 리액트
    }

    console.log('글로벌', topic);   // 글로벌 리액트

#### const : 변경할 수 없는 변수

상수(constant)는 갑을 변경할 수 없는 변수다.

    # 상수를 변경하려고할 때 발생하는 오류
    Uncaught TypeError: Assignment to constant variable.

#### let : 구문적인 변수 영역 규칙 지원되는 변수

중괄호({}) 내부에서 지역변수로만 사용가능

    # if 블록 안의 topic을 변경해도 if 블록 바깥의 topic에는 영향 없음 (for문도 마찬가지)
    var topic = "자바스크립트";

    if (topic) {
        let topic = "리액트";
        console.log('블록', topic); // 리전 리액트
    }

    console.log('글로벌', topic);   // 글로벌 자바스크립트

### 2-2. 함수 만들기

#### 함수 선언

함수 선언으로 작성된 함수는 호이스팅 된다.

    function funcName1() {
        console.log("함수1");
    }

    // 함수 호출
    funcName1();

#### 함수 표현식(function expression)

함수 표현식은 이름없는 함수를 만들며, 변수에 값을 대입할 수 있다.
표현식으로 작성된 함수는 호이스팅 되지 않는다.

    const funcName2 = function() {
        console.log("함수2");
    }

    // 함수 호출
    funcName2();

#### 디폴트 파라미터

함수를 호출하면서 인자값을 지정하지 않으면 디폴트 값이 사용되도록 설정할 수 있다.  
문자열 뿐만아니라 어떤 타입의 값이라도 디폴트 값으로 사용할 수 있다.

    fucntion funcName3(name="최윤규", activity="유도") {
        console.log(`${name}은 ${activity}를 좋아합니다.`)
    }

#### 화살표 함수(Arrow Function)

function 키워드 없이 함수 표현식을 작성할 수 있다.

    # 파라미터가 1개면 ()를 사용하지 않을 수 있다. (2개 이상부턴 괄호로 파라미터 감싸줘야한다.)
    # 함수 동작이 return 포함 1줄이면 중괄호{}와 return을 생략할 수 있다.
    const funcName4 = name => `${name}아 안녕!`;

#### 객체 반환하기(화살표 함수에서)

객체를 반환하려면 객체를 괄호로 둘러싸야 한다.  
(중괄호를 객체영역이 아닌 함수 영역으로 착각할 수 있기 때문)

    const person = (firstName, lastName) => (
        {
            fist: fistName,
            last: lastName.
        };
        )

#### 화살표 함수와 영역

화살표 함수는 새로운 this영역을 만들어내지 않는다.

    # 일반 함수는 this를 새로 바인딩한다. 예를 들어 다음에서 this는 gangown 객체가 아닌 그 어떤 것이다.
    const gaongwon = {
        resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
        print: function(delay=1000) {
            setTimeout(function() {
                console.log(this.resoprts.join(","));
            }, delay);
        }
    }

    gangwon.print(this);    // Cannot read property 'join' of undefined 라는 오류 발생

이 오류는 this.resorts의 join메서드를 호출하려고 했기 때문이다.  
이 경우 this를 콘솔에 찍어보면, this가 window 객체임을 알 수 있다.

> function(delay=1000){...} 안에서는 this가 gaongwon인 반면,  
> setTimeout(function(){...}) 안에서는 this가 window 객체이다.
> 이문제를 해결하기 위해 화살표 함수를 사용하면 this의 영역이 유지된다.

    var gangwon = {
        resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
        print: function(delay=1000) {
            setTimeout(() => {
                console.log(this.resorts.join(","));
            }, delay);
        }
    }

    gangwon.print();    // 용평, 평창, 강촌, 강릉, 홍천

-   만약 function(delay=1000){...}을 화살표 함수로 만들면 새로운 this 영역을 만들지 않기 때문에 this는 window 객체를 가르키게 된다.

### 2-3. 컴파일하기

가장 유명한 자바스크립트 컴파일링 도구는 [바벨](http://www.babeljs.io/)이다.  
자바스크립트에서 컴파일링은 바이너리로 변환하는 것이 아니라 더 많은 브라우저가 이해할 수 있도록 다른 버전의 자바스크립트 구문으로 변환하는 것을 뜻한다.

자바스크립트 컴파일은 보통 웹팩이나 파슬과 같은 자동화된 빌드 도구에 의해서 차리된다.

### 2-4. 객체와 배열

#### 구조 분해(destructuring)

객체 안에 있는 필드값을 원하는 변수에 대입할 수 있다.  
구조분해로 데이터를 할당 받은 변수를 변경해도 원래의 필드값은 바뀌지 않는다.(call by value 인듯)

    const sandwich = {
        bread: "더치 크런치",
        meat: "참치",
        cheese: "스위스",
        toppings: ["상추", "토마토", "머스타드"]
    };

    const { bread, meat } = sandwich;

    console.log(bread, meat);   // 더치 크런치 참치

    # 객체를 분해해서 함수의 인자로 넘길 수 있다.
    const lordify = regularPerson => {
        console.log(`켄터베리의 ${regularPerson.firstname}`)
    };

    var regularPerson = {
        firstname: "윤규",
        lastname: "최",
    };

    lordify(regularPerson); // 켄터베리의 윤규

######

    # 객체 필드에 접근하기 위해 점(.)과 필드 이름을 사용하는 대신,
    # 필요한 값을 구조분해 해서 가져올 수 있다.
    const lordify = {firstname} => {
        console.log(`켄터베리의 ${regularPerson.firstname}`)
    };

    var regularPerson = {
        firstname: "윤규",
        lastname: "최",
    };

    lordify(regularPerson); // 켄터베리의 윤규

######

    # 객체안의 객체의 필드에 접근하기
    const regularPerson = {
        firstname: "윤규",
        lastname: "최",
        spouse: {
            firstname: "지민"
            lastname: "유"
        }
    };

    const lordify = ({ spuse: { firstanme } }) => {
        console.log(`켄터베리의 ${firstname}`);
    };
    lordify(regularPerson); // 켄터베리의 지민

#### 배열 구조 분해

배열을 구조분해해서 값을 뽑아낼 수도 있다.

    const [firstAnimal] = ["캥거루", "웜뱃", "코알라"];
    console.log(firstAnimal);   // 캥거루

    # 리스트 매칭 : 불필요한 값 콤마(,)를 활용해 생략
    const [,,thirdAnimal] = ["캥거루", "웜뱃", "코알라"];
    console.log(thirdAnimal);   // 코알라

#### 객체 리터럴 개선(object literal enhancement)

객체 리터럴 개선은 구조 분해의 반대라 할 수 있다.  
객체 리터럴 개선을 사용하면 현재 영역에 있는 변수를 객체의 필드로 묶을 수 있다.

    const name = "무등산";
    const elevation = 1187;
    const funHike = {name, elevation}

    console.log(funHike);   //  {name: "무등산", elevation: 1187}

    # 객체 리터럴 개선과 재구축을 통해 객체 메서드를 만드는 것도 가능하다.
    # 이때 객체 메서드는 객체의 key값에 접근하기 위해 this를 사용한다
    const name = "무등산";
    const elevation = 1187;
    const print = function() {
        console.log(`${this.name}의 높이는 ${this.elevation}m 입니다.`)
    }
    const funHike = {name, elevation, print};

    funHike.print();    // 무등산의 높이는 1187m 입니다.

######

    # 객체 메서드를 정의할 때는 function 키워드를 사용하지 않아도 된다.
    // 옛날 방식
    var skier = {
        name: name,
        sound: sound,
        powderYell: function() {
            var yell = this.sound.toUpperCase();
            console.log(`${yell} ${yell}!!!`);
        },
        speed: function(mph) {
            this.speed = mph;
            console.log('속력(mph):', mph);
        }
    }

    // 새로운 방식
    var skier = {
        name: name,
        sound: sound,
        powderYell() {
            var yell = this.sound.toUpperCase();
            console.log(`${yell} ${yell}!!!`);
        },
        speed(mph) {
            this.speed = mph;
            console.log('속력(mph):', mph);
        }
    }

#### 스프레드 연산자(spread operator)

3개의 점(...)으로 이뤄진 연산자로 몇가지 역할을 담당한다.

    # (1) 배열 내용을 조합할 수 있다.
    const peaks = ["대청봉", "중청봉", "소청봉"];
    const canyons = ["천불동계곡". "가야동계곡"];
    const seoraksan = [...peaks, ...cayons];

######

    # (2) 원본을 변형시키지 않고 마지막 변수 접근할 수 있다.
    // 위에서 정의한 peaks배열의 마지막 원소를 변수에 담고 싶은 경우,
    // 아래처럼하면 reverse메소드는 inplase 적용되어 원본 배열을 변형시킨다.
    const peaks = ["대청봉", "중청봉", "소청봉"];
    const [last] = peaks.reverse();

    // 스프레드를 사용하면 복사본을 만들어서 뒤집을 수 있다.
    const peaks = ["대청봉", "중청봉", "소청봉"];
    const [last] = [...pekas].reverse();

######

    # (3) 배열의 나머지 원소들을 얼을 수 있다.
    const lakes = ["경포호", "화진포", "송지호", "청초호",];
    const [ first, ...rest ] = lakes;

    console.log(rest.join(","));    // 화진포, 송지호, 청초호

######

    # (4) 세 점(...) 구문을 사용해 함수의 인자를 배열로 모을 수 있다.
    // 함수 파라미터 정의에서 스프레드 연산자가 쓰인 경우 레스트 파라미터(rest parameters)라고 한다.
    function directions (...args) {
        let [start, ...remaining] = args;
        let [finish, ...stops] = remaining.reverse();

        console.log(`${ args.length } 도시를 운행합니다.`);
        console.log(`${start}에서 출발합니다.`);
        console.log(`목적지는 ${finish}입니다.`);
        console.log(`중간에 ${stops.length} 군데를 들립니다.`)
    }

    directions(
        "서울",
        "수원",
        "천안",
        "대전",
        "대구",
        "부산",
    );

######

    # (5) 스프레드 연산자를 객체에도 사용할 수 있다.
    const morning = {
        breakfast: "미역국",
        lunch: "삼치구이와 보리밥"
    };

    const dinner = "스테이크 정식";

    const backpackingMeals = {
        ...morning,
        dinner
    };

    console.log(backpackingMeals);
    // {breakfast: "미역국", lunch: "삼치구이와 보리밥", dinner: "스테이크 정식"}

### 2-5. 비동기(asynchronous) 자바스크립트

#### Ajax 통신

XMLHttpRequest 라는 객체를 통해 웹페이지 일부를 비동기적으로 통신할 수 있다.  
그러나 요즘엔 fetch 함수나 axios 패키지로 비동기통신 많이한다.

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://learn.codeit.kr/api/members');
    xhr.onload = function () {
        console.log(xhr.response);
    };
    xhr.onerror = function () {
        alert('Error!');
    };
    xhr.send();

#### 프로미스

Promise : 작업에 관한 '상태 정보'를 가지고 있는 객체  
작업이 성공하면, 프로미스 객체는 그 성공 결과도 함께 가진다.  
작업이 실패하면, 프로미스 객체는 작업 실패 이유도 함께 가진다.

-   pending : 작업 진행중
-   fulfiled : 작업 성공
-   rejected : 작업 실패

######

    # randomuser.me API로부터 데이터 가져오기
    console.log(fetch("https://api.randomuser.me/?nat=US&results=1));

-   fetch함수는 Promise 객체를 리턴한다.
-   콘솔 로그를 보면 대기 중인 프로미스(promise)를 볼 수 있다.
-   프로미스는 자바스크립트에서 비동기적인 동작을 잘 처리할 수 있게 해준다.
-   대기중인 프로미스는 데이터가 도착하기 전의 상태를 표현한다.
-   .then()이라는 함수를 대기 중인 프로미스에 연쇄 호출 해야한다.
-   then은 콜백 함수를 인수로 받으며, 바로 앞에 이는 연산(프로미스)이 성공하면 콜백이 호출된다.
-   fetch로 데이터를 가져오면 then이 그 데이터로 다른 일을 하는 것이다.

#### then 메소드

    fetch("https://api.randomuser.me/?nat=US&results=1")
        .then(res => console.log(res.json()));

-   then은 프로미스가 정상적으로 완료되면(pending -> fulfiled) 콜백 함수를 한 번만 호출한다.
-   이 콜백 함수가 반환하는 값은 그다음에 오는 then 함수의 콜백에 전달되는 인자가 된다. (promise chaining)
-   then이 프로미스 객체를 리턴하는 경우 : 콜백이 리턴한 프로미스와 동일한 상태와 결과를 갖게 된다.
-   then이 프로미스 객체가 아닌 것을 리턴하는 경우 : then 메소드가 리턴했던 프로미스 객체는 fulfiled가 되고, 콜백의 리턴값을 작업 성공 결과로 갖게된다.  
    (.json()과 .text()는 프로미스 객체를 리턴하는 메소드이다.)

######

    fetch("https://api.randomuser.me/?nat=US&results=1")
        .then(res => res.json())
        .then(json => json.results)
        .then(console.log)
        .catch(console.error); // fetch가 성공하지 못한 경우 콜백

#### reject

.then에 두개의 콜백이 들어 있는 경우,  
첫번째 콜백은 프로미스 객체가 fulfiled 되었을 때 실행되고,  
두번째 콜백은 프로미스 상태가 rejected 되었을 때 실행된다.

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text(), (error) => { console.log(error); })
        .then((result) => { console.log(result); });

#### catch 메소드

프로미스 객체가 rejected 상태가 되면 실행할 콜백함수 넣는 메소드이다.
catch 메소드는 마지막에 써야한다. catch 다음에 있는 then 메소드에서 에러가 발생하면 처리할 수 없기 때문이다.

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text())
        .then((result) => { console.log(result); })
        .catch((error) => { console.log(error); });

#### finally 메소드

프로미스 상태에 상관없이 항상 실행하고 싶은 코드가 있을때 사용한다.

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text())
        .then((result) => { console.log(result); })
        .catch((error) => {
        console.log(error);
        throw new Error('from catch method');
        })
        .finally(() => { console.log('exit'); } );

#### 프로미스 만들기

    const getPeople = count =>
        new Promise((resolves, rejects) => {
            const api = `https://api.randomuser.me/?nat=US&results=${count}`;
            // AJAX : 웹페이지 일부를 비동기 통신하는 것 XMLHttpRequest로 구현
            const request = new XMLHttpRequest();
            request.open("GET", api);
            request.onload= () =>
                requnest.status === 200
                    ? resolves(JSON.parse(request.response).results)
                    : reject(Error(request.statusText));
            request.onerorr = err => rejects(err);
            request.send();
        });

        getPeople(5)
            .then(members => console.log(members))
            .catch(error => console.erros(`getPeople failed: ${error.message}`));

    # 이미 상태가 결정된 프로미스 객체 만들기
    const p = Promise.resolve('success');           // fulfiled 상태의 Promise 객체 만들기
    const p2 = Promise.reject(new Error('fail'));   // rejected 상태의 Promise 객체 만들기

#### 프로미스와 all, race 메소드

all 메소드 : 배열 안에 있는 모든 Promise 객체가 fulfilled 상태가 될 때까지 기다린 fulfilled 상태가 된다.

        const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
        const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
        const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());
        Promise
            .all([p1, p2, p3])
            .then((results) => {
                console.log(results); // Array : [p1, p2, p3]
            });

race 메소드 : race 메소드 내 배열 중 가장 먼저 fulfilled 상태 또는 rejected 상태가 된 Promise 객체와 같은 상태가 된다.

        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Success'), 1000);
        });
        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('fail')), 2000);
        });
        const p3 = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('fail2')), 4000);
        });
        Promise
            .race([p1, p2, p3])
            .then((result) => {
            console.log(result); // hello 출력
            })
            .catch((value) => {
            console.log(value);
            });

#### async/await

비동기 함수를 실행하는 다른 방법

    const getFakePerson = async () => {
        try {
            let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
            let { results } = res.json();
            console.log(results);
        } catch(error) {
            console.error(error);
        }
    };

    getFakePerson();

### 2-6. 클래스

자바스크립트는 프로토타입을 사용한 상속이라 불리는 방법을 사용한다.  
이 기법은 객체지향처럼 느껴지는 구조를 만들어내기 위한 기법이다.

    function Vacation(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    Vacation.prototype.print = function() {
        console.log(this.destination + "은(는) " + this.length +" 일 걸립니다.");
    };

    const maui = new Vacation("마우이", 7);

    maui.print();   // 마우이은(는) 7 일 걸립니다.

######

ES2015에는 클래스 선언이 추가되었다. (하지만 작동 방식은 위와 같다.)

    class Vacation {
        constructor(destination, length) {
            this.destination = destination;
            this.length = length;
        }

        print() {
            console.log(this.destination + "은(는) " + this.length +" 일 걸립니다.");
        }
    }

    const trip = new Vacation("칠레 산티아고", 7);

    console.log(trip.print());  // 칠레 산티아고은(는) 7 일 걸립니다.

#### 추상 클래스

    # Expedition은 Vaction 클래스를 상속받는다.
    class Expedition expends Vacation {
        constructor(destination, length, gear) {
            super(destination, length);
            this.gear = gear;
        }

        print() {
            super.print();
            console.log(`당신의 ${this.gear.join("와(과) 당신의 ")}를(을) 가져오십시오.`)
        }
    }

    const trip2 = new Expedition("한라산", 3,
                        ["선글라스", "오색 깃발", "카메라"]);
    tirp2.print();

### 2-7. ES6 모듈

#### export와 import

선언문 앞에 export 키워드로 다른 파일에서도 사용가능하게 할 수 있다.

    export const 변수명 = 'value';

    // 단, 사용하고자 하는 js 파일에서 import도 해줘야한다.
    import { 변수명, 함수명 } from '경로.js';

    # 이름 바꾸기 : 임포트한 함수나 변수의 이름을 변경하기
    import { 변수명 as 변경할이름, 함수명 } from '경로.js';

    # 한꺼번에 다루기
    export { 변수명, 함수명 }; // export 할 때 as 키워드로 이름 미리 바꿀 수 있다.

    import * as 모듈이름 from '경로.js';
    모듈이름.변수명
    모듈이름.함수명

#### export default

export 키워드 뒤에 default를 붙이면 반드시 하나의 대상만 내보낼 수 있게 된다.  
주의할점은 default 키워드는 js파일 내부에서 단 한번만 사용가능하다는 것이다.

    export default 'codeit';

#### 커먼 JS

커먼JS(CommonJS)는 모든 버전의 노드에서 지원하는 일반적인 모듈 패턴이다.  
커먼JS를 사용하면 module.exports를 사용해 자바스크립트 객체를 익스포트할 수 있다.

    const print(message) => log(message, new Data());

    const log(message, timestamp) =>
        console.log(`${timestamp.toString(): ${message}}`);

    module.exports = {print, log};

######

커먼JS는 import 문을 지원하지 않는다. 대신 require 함수를 통해 모듈을 임포트 할 수 있다.

    const { log, print } = require('./txt-helpers')

## 3. JS를 활용한 함수형 프로그래밍

### 3-1. 함수형이란?

함수형 프로그래밍을 하기 위해서는 함수가 1급 시민인 언어여야한다. 함수가 1급 시민이려면

-   해당 언어에서 변수나 객체, 배열에 함수를 넣을 수 있고,
-   함수를 다른 함수의 인자로 넘길 수 있으며,
-   함수에서 함수를 만들어서 반환할 수 있어야한다. (고차함수)

이제부터는 함수를 선언할 때 사용한 화살표의 개수에 주의를 기울일 필요가 있다.  
만약 2개 이상의 화살표가 있다면, 고차함수를 사용하고 있다는 뜻이다.

### 3-2. 명령형 프로그래밍과 선언적 프로그래밍 비교

함수형 프로그래밍은 선언적 프로그래밍이라는 더 넓은 프로그래밍 패러다임의 한가지 이다.  
선언적 프로그래밍은 필요한것을 달성하는 과정을 하나하나 기술하는 것 보다  
필요한 것이 어떤 것인지를 기술하는 것에 더 방점을 두고 애플리케이션의 구조를 세운다.

반면, 명령형 프로그래밍은 코드로 원하는 결과를 달성해 나가는 과정에만 관심을 둔다.  
조건문과 반복문을 사용해서 목적을 달성해나가는 과정을 볼 수 있다.

함수형 프로그래밍은 함수를 사용해 추상적인 개념을 표현하고 실제 그 작업을 처리하는 방법은 추상화를 통해 아랫단에 감춰진다. 더 깔끔해지고 작성자의 의도를 더 파악하기 쉽다.

### 3-3. 함수형 프로그래밍 개념

#### 불변성(immutable), inplace false라는 말

함수형 프로그래밍에서는 데이터가 변할 수 없다.  
원본 데이터 구조를 변경하는 대신에 그 데이터 구조의 복사본을 만들고 그 중 일부를 변경한다.  
그리고 원본 대신 변경한 복사본을 사용해 필요한 작업을 진행한다.

    # (예제1) 잔디 색
    let color_lawn = {
        title: "잔디",
        color: "#00FF00",
        rating: 0,
    }:

    // 색에 평점을 메기는 함수, 원본도 같이 바뀜
    function rateColor(color, rating) {
        color.rating = rating;
        return color;
    }

    consolo.log(rateColor(color_lawn, 5).rating); // 5
    console.log(color_lawn.rating);               // 5

자바스크립트에서 함수의 인자는 실제 데이터에 대한 참조다.  
rateColor 함수 안에서 color의 rating을 변경하면 원본 color_lawn객체의 rating도 바뀐다.

    // Object.assign을 사용하면 원본은 바뀌지 않음
    var rateColor = function(color, rating) {
        return Object.assign({}, color, {rating:rating});
    };

    console.log(rateColor(color_lawn, 5).rating);   // 5
    console.log(color_lawn.rating);                 // 0

Object.assign은 복사기와 같다. 빈 객체를 받고, color 객체를 그 빈 객체에 복사한 뒤,  
복사본에 있는 rating 프로퍼티의 값을 rating 파리미터의 값으로 변경한다.

    // 화살표 함수와 스프레드 연산자를 활용해 같은 함수 구현
    const rateColor = (color, rating) => ({
        ...color,
        rating,
    });

######

    # (예제2) 색 이름 배열
    let list = [
        { title: "과격한 빨강" },
        { title: "잔디" },
        { title: "파티 핑크" },
    ]

    // 이 배열에 색을 추가하는 push함수는 불변성 함수가 아니다.
    const addColor = function(title, colors) {
        colors.push({ title: title });
        return colors;
    }

    console.log(addColor("화려한 녹색", list).length);  // 4
    console.log(list.length);                          // 4

원래의 list 배열을 변화시키지 않고 유지하기 위해서는 Array.concat을 사용해야 한다.

    const addColor = (title, array) => array.concat({title});

    console.log(addColor("화려한 녹색", list).length);  // 4
    console.log(list.length);                          // 3

Array.concat은 두 배열을 붙여준다. 여기서는 Array.concat이 새로운 객체를 받는다.  
그 객체에는 새로운 색의 이름이 title이라는 이름의 프로퍼티로 들어 있다.  
Array.concat은 그 객체를 원래의 배열을 복사한 새로운 배열 뒤에 추가한다.

    // 화살표 함수와 스프레드 연산자를 활용해 같은 함수 구현
    const addColor = (title, list) => [...list, {title}];

#### 순수성

순수 함수(Pure Functions)는 파라미터에 의해서만 반환값이 결정되는 함수를 뜻한다.
순수 함수는 최소한 하나 이상의 인수를 받고, 인자가 같으면 항상 같은 값이나 함수를 반환한다.  
순수 함수에는 부수 효과(side effect)가 없다. 부수 효과란 전역 변수를 설정하거나, 함수 내부나 애플리케이션에 있는 다른 상태를 변경하거나 입출력하는 것을 말한다.  
순수 함수는 인수를 변경 불가능한 데이터로 취급한다.

#### 데이터 변환

함수형 프로그래밍은 함수를 사용해 원본을 변경한 복사본을 만들고 순수 함수를 통해 데이터를 변경한다.

Array.join : 배열의 모든 원소를 인자로 받아서 구분자로 연결한 문자열 반환 (inplace=flase)

    const schools = ["Yorktown", "Washington & Lee", "Wakefield"];
    console.log( schools.join(",") ); // "Yorktown, Washington & Lee, Wakefield"

Array.filter : 인자로 술어(boolean반환 하는 함수)를 받아 새로운 배열을 구성한다.

    const wSchools = schools.filter(school => school[0] === 'W');
    console.log( wSchools );            // ["Washington & Lee", "Wakefield"]
    // 배열에서 원소를 제거해야한다면 Array.pop이나 Array.slice보다 Array.filter( !== ) 사용 권장

Array.map : 인자로 변환 함수를 받아 모든 원소에 적용해 반환받은 값으로 새로운 배열을 구성한다.

    const highSchools = schools.map(school => `${school} High School`);
    console.log(highSchools.join("\n"));    // Yorktown High School
                                            // Washington & Lee High School
                                            // Wakefield High School

map 함수는 객체, 값, 배열, 다름 함수등 모든 자바스크립트 타입으로 이뤄진 배열을 만들 수 있다.

    const highSchools = schools.map(school => ({name: school}));
    console.log( highSchools );     // [
                                    //  { name : "Yorktown" },
                                    //  { name : "Washington & Lee" },
                                    //  { name : "Wakefield" }
                                    // ]

배열의 원소중 하나만 변경하는 순수 함수가 필요할 때도 map을 사용할 수 있다.

    let schools = [
        { name: "Yorktown" },
        { name: "Stratford" },
        { name: "Washington & Lee" },
        { name: "Wakefield" }
    ];

    const editName = (oldName, name, arr) =>
        arr.map(item => (item.name === oldName ? { ...item, name} : item)); // {...item, name}은 객체의 속성들을 복사하고 새로운 값으로 객체를 생성하는 방법이다. 원래는 {...item, name: name}인데 key값과 value 값이 같아서 한번만 쓴 것이다.

    let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

    console.log( updatedSchools[1] ); // { name: "HB Woodlawn" }
    console.log( schools[1] ); // { name: "Stratford" }

map은 각 원소의 인덱스를 변환함수의 두번째 인자로 넘겨준다.  
(map 메소드의 콜백 함수 매개 변수(현재값, 현재 인덱스, 원본배열))

    const editNth = (n, name, arr) =>
        arr.map((item, i) => (i ===n ? {...item, name} : item))

객체를 배열로 변환하고 싶을 때는 Array.map과 Object.keys를 함께 사용하면 된다.  
Object.keys는 어떤 객체의 키로 이뤄진 배열을 반환하는 메서드다.

    const schools = {
        "Yorktown" : 10,
        "Washington & Lee" : 2,
        "Wakefield" : 5
    };

    const schoolArray = Obejct.key(schools).map(key => ({
        name: key,
        wins: schools[key]
    })
    );

    console.log(schoolArray);   // [ { name: 'Yorktown', wins: 10 }
                                //   { name: 'Washington & Lee', wins: 2 }
                                //   { name: 'Wakefield', wins: 5 } ]

reduce와 reduceRight 함수를 사용하면 객체를 수, 문자열, 불린 값, 객체, 심지어 함수와 같은 값으로 변환할 수 있다. (reduce(callback, initialValue)는 배열을 하나의 값으로 축하는 역할을 한다.)  
reduceRight도 기본적인 매커니즘은 동일하지만 배열의 맨 마지막 원소부터 축약을 시작한다는 점이 다르다.

    const ages = [21, 18, 42, 40, 64, 63, 34];

    const maxAge = ages.reduce((max, age) => {
        if (age > max) {
            return age;
        } else {
            return max;
        }
    }, 0);  // 초기값 : 0

    // 짧게 쓰기
    const max = ages.reduce((max, age) => (value > max ? value : max), 0);

배열을 객체로 변환해야할 때가 있다. 다음 예제는 reduce를 사용해 값이 들어 있는 배열을 해시로 변환한다.  
(reduce 메소드의 콜백 함수 매개변수(이전누산값or초기값, 현재 배열의 요소의 값, 현배 배열 요소의 인덱스, 원본 배열))

    const colors = [
        {
            id: 'xekare',
            title: "과격한 빨강",
            rating: 3
        },
        {
            id : 'jbwsof',
            title: "큰 파랑",
            rating: 2
        },
        {
            id : 'prigbj',
            title: "회색곰 회색",
            rating: 5
        },
        {
            id : 'ryhbhsl',
            title: "바나나",
            rating: 1
        },
    ];

    const hashColors = colors.reduce(
        (hash, {id, title, rating}) => {    // {id, title, rating} 이 부분은 구조분해
            hash[id] = {title, rating};
            return hash;
        }, {});

    console.log(hashColors);    // { 'xekare': { title: '과격한 빨강', rating: 3 },
                                //   'jbwsof': { title: '큰 파랑', rating: 2},
                                //   'prigbj': { title: '회색곰 회색', rating: 5},
                                //   'ryhbhsl': { title: '바나나', rating: 1} }

reduce를 사용해 같은 값이 여럿 들어 있는 배열을 서로 다른 값이 한 번씩만 들어 있는 배열로 바꿀 수 있다.

    const colors = ["red", "red", "green", "blue", "green"];

    const distinctColors = colors.reduce(
        (unique, color) =>
        unique.indexOf(color) !== -1 ? unique : [...unique, color], // indexOf는 배열을 처음부터 순회하면서 일치하는 요소를 찾는다. 일치하는 요소르 찾으면 해당 요소의 인덱스를 반환한다. 일치하는 요소가 없거나 검색 범위를 벗어난 경우 -1을 반환한다.
        []
    );

    console.log(distinctColors);    // ["red", "green", "blue"]

map과 reduce는 함수형 프로그래머가 주로 사용하는 무기이며, 자바스크립트도 예외가 아니다.  
한 데이터 집합에서 다른 데이터 집합을 만들어내는 능력은 꼭 필요한 기술이며 프로그래밍 패러다임과 관계없이 유용하다.

#### 고차 함수

고차한수는 다른 함수를 조작할 수 있다. 또 다른 함수를 인자로 받을 수 있거나 함수를 반환할 수 있다.

    const invokeIf = (condition, fnTrue, fnFalse) =>
        (condition) ? fnTrue() : fnFalse();

    const showWelcome = () ->
        console.log("Welcome!!!");

    const showUnautorized = () =>
        console.log("Unauthorized!!!");

    invokeIf(true, showWelcome, showUnautorized);   // "Welcome"
    invokeIf(false, showWelcome, showUnautorized);  // "Unauthorized"

다른 함수를 반환하는 고차 함수는 자바스크립트에서 비동기적인 실행 맥락을 처리할 때 유용하다.

**커링(Currying)**은 고차 함수 사용법과 관련한 함수형 프로그래밍 기법이다.  
어떤 연산을 수행할 때 필요한 값 중 일부를 저장하고 나중에 나머지 값을 전달받는 기법이다.

    // 외부함수 : 외부함수 userLogs는 userName이라는 매개변수를 받아서 내부함수를 반환, 이함수가 반환하는 내부함수는 또 다른 매개변수인 message를 받아서 사용자 로그 메세지 출력
    // 내부함수 : 외부함수에서 받은 userName과 내부함수에서 받은 message로 콘솔 출력
    const userLogs = userName => message =>
        console.log(`$(userName) -> ${message}`);

    const log = userLogs("grandpa23");  // 외부 함수(고차함수) 호출

    log("attempted to load 20 fake mebmers");   // 내부 함수 호출
    // userLogs를 호출해 만들어지는 log함수를 호출할 때마다 메시지 맨 앞에 grandpa23이 덧붙여진다.

    getFakePerson(20).then(
        members => log(`successfully loaded ${members.length} members`),
        error => log("encountered an error loading members")
    );

    // grandpa23 -> attempted to load 20 fake members
    // grandpa23 -> successfully loaded 20 members

    // grandpa23 -> attempted to load 20 fake members
    // grandpa23 -> encountered an error loading members

#### 재귀

재귀는 자기 자신을 호출하는 함수를 만드는 기법이다.  
루프는 모두 재귀로 바꿀 수 있고, 일부 루프는 재귀로 표현하는 쪽이 더 쉽다.

    // 10부터 0까지 거꾸로 세는 경우
    const countdown = (value, fn) => {
        fn(value);
        return (value>0) ? countdown(value-1, fn) : value
    };

    countdown(10, value => console.log(value));

#### 합성

함수형 프로그램은 로직을 구체적인 작업을 담당하는 여러 작은 순수 함수로 나눈다.  
그 과정에서 언젠가는 모든 작은 함수를 한데 합칠 필요가 있다.  
합성의 경우 여러 다른 구현과 패턴과 기법이 있다.

**체이닝**은 가장 낯익는 방법으로 (.)을 사용해서 연쇄호출 하는 것이다.

    const template = "hh:mm:ss tt";
    const clockTime = template.replace("hh", "03")
        .replace("mm", "33)
        .replace("ss", "33")
        .replace("tt", "PM");
    console.log(clockTime);     // "03:33:33 PM"

여기서 **both 사용자 함수**는 서로 다른 두 함수에 값을 흘려 넣는 함수다.  
civilianHours의 출력은 appendAMPM의 입력이 된다.  
따라서 날짜 값을 이 두 함수를 사용해 처리하는 대신 both를 사용하면 한 함수로 처리할 수 있다.  
하지만 이런 구문은 이해하기 어렵고 유지보수나 대규모 확장이 어렵다.

    const both = date => appendAMPM(civilianHours(date))

여기서 **compose 사용자 함수**는 함수를 더 큰 함수로 조합해준다.  
또한 원하는 위치에 언제든지 함수를 추가할 수 있으므로 더 쉽게 확장할 수 있다.

    const both = compose(
        civilianHours,
        appendAMPM
    );

    both(new Date());

    const compose = (...fns) => (arg) =>    // 몇 개인지 모를 함수를 받으니까 스프레드 연산자 ...fns 사용, compose는 인자로 받은 함수를 배열로 저장
        fns.reduce((composed, f) => f(composed), arg);  // 함수 배열 fns의 모든 함수를 순차적으로 실행하고 결과를 누적
    // 결과적으로 both는 civilianHours 함수를 먼저 실행하고 그 결과를 appendAMPM 함수에 전달하여 두 함수를 조합한다.

compose 함수는 여러 함수를 인자로 받아서 한 함수의 결과로 내놓는다.  
이 구현은 스프레드 연산자를 사용해 인자로 받은 함수들을 fns라는 배열로 만든다.  
그후 compose는 arg라는 인자를 받는 함수를 반환한다.  
이렇게 반환된 화살표 함수에 나중에 누군가 인자를 전달해 호출하면,  
fns 배열의 reduce가 호출되면서 arg로 받은 값이 전달된다.  
arg값은 reduce의 초기 값이 되고,  
각 이터레이션 마다 배열의 각 원소와 이전 값을 변환 함수를 사용해 축약한 값을 전달한다.  
이때 reduce의 변환 하무는 이전 이터레이션의 결과값인 composed와 f를 인자로 받아서  
f에 composed를 적용해 반환한다.  
마지막 함수가 호출되면 최종 결과를 반환한다.