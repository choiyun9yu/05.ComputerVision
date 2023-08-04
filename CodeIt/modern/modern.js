// modern javascript :  현시점에 사용하기 적합한 범위 내에서 최신 버전의 표준을 준수하는 자바스크립트

// 1. 데이터 타입
    // 자바스크립트 기본형
    // Number, String, Boolean, 
    // Null, Undefined
    // Symbol(유일한 값 만들 때 사용), BigInt(엄청큰 수 다룰 때 사용)
    
    // Symbol : 다른 어떤 값과 비교해도 true가 될 수 없는 고유한 변수가 된다.
    //          심지어 똑같은 설명을 붙인 심볼을 만들더라도 두 값을 비교하면 false가 반환 된다.
    {   
        const user = Symbol('심볼에 대한 설명 삽입 가능');  // 생성자를 통해 심볼 생성
    }   
    
    // 자바스크립트 참조형
    // Object
    
    // typeof 연산자로 null을 검사하면 object 반환
    // typeof 연산자로 함수를 검사하면 function 반환
    
    // falsy 값
    // false, null, undefined, NaN, 0, ''
    // truthy 값
    // 빈배열, 빈객체를 포함한 falsy값 이외의 모든 값



// 2. 논리 연산 방식 (연산자 우선순위는 and가 높다. 그러나 소괄호로 의도 표시하는게 좋은 습관!)
    console.log('Codeit' && 'JavaScript');
    // and는 왼쪽값이 Truthy 하면 오른쪽 값을 리턴하고, 왼쪽값이 Falsy 하면 그대로 왼쪽 값을 리턴한다.
    // or은 왼쪽값이 Truthy 하면 왼쪽값을 리턴하고, 왼쪽값이 Falsy 하면 오른쪽 값을 리턴한다.

    // 응용 논리연산자를 조건문처럼 활용하는 방법
    {
        function print(value) {
            const message = value || 'Codeit';
            console.log(message);
        }
        print();    // 입력한 값이 Falsy하면 'Codeit'을 출력
        print('JavaScript');    // 입력 값이 Truthy하면 그 값을 출력 
    }
    
    // null 병합 연산자 ?? : 물음표 두개를 사용해서 null 혹은 undefined 값을 가려내는 연산자.
    { 
        const example1 = null ?? 'I';   // I
        const example2 = undefined ?? 'love';   // love
        const example3 = 'Codeit' ?? 'JavaScript';  // Codeit
    
        // 연산자의 왼편 값이 null 이거나 undefined라면 오른쪽 값 리턴
        // 왼편 값이 null 이거나 undefined가 아니라면 왼쪽 값 리턴
}



// 3. 함수
    // 함수 만들기
    { 
    // 3-1. 함수 선언식 : 함수 호이스팅에 의해서 선언하기전에 실행 가능!
    //                  함수 선언식에 포함된 함수는 스코프가 그 함수 안에 갇히지만
    //                  다른 블록에 선언된 함수는 불러올 수 있다.
    function func1(param) { 
        console.log(param);
    }

    // 3-2. 함수 표현식, 파라미터에 함수를 정의하는 것도 함수 표현식이다. (호이스팅 X)
    //                 함수선언은 결국 함수를 값처럼 사용하는 것이다.
    //                 함수 표현식은 할당된 변수에 따라서 그 스코프가 결정된다.
    const func2 = function (param) { 
        console.log(param);
    }   

    // 3-3. 재귀함수 만들기, 함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 property가 생성된다.
    //                     함수 이름이 없으면 변수명을 함수이름이 있으면 함수이름을 반환한다.
    //                     재귀 함수를 사용할 땐 함수 이름을 선언하는 기명함수표현식을 
    //                     사용하는 것이 좋다.

    // 3-4. 즉시 실행 함수, 함수 선언 부분을 소괄호로 감싼 다음 바로뒤에 소괄호를 한번더 붙임
    //                    IIFE라고도 부른다. 주의점은 함수명을 선언해도 외부에서 호출할 수 없다.
    (function (x, y) {
        console.log(x + y);
    })(3, 5);

    // 3-4. 함수의 특징
    // console.log는 요소를 HTML과 같은 트리 구조로 출력 하고,
    // DOM 요소에 대해 특별한 처리를 제공.

    // console.dir은 요소를 JSON과 같은 트리 구조로 출력 하고,
    // DOM JS 객체의 전체 표현을 보려고 할 때 유용.

    // 콜백 함수 : 다른 함수의 파라미터로 전달된 함수. 

    // 고차 함수 : 함수의 리턴값이 또 다른 함수인 함수.
    //             이중 괄호를 활용하여 고차함수로 호출되는 함수를 바로 호출할 수도 있다.

    // 3-5. arguments 객체 <- 인자를 유연하게 받고 싶을 때 활용할 수 있다.
    // 함수 내부에서 arguments 객체는 유사배열구조로 전달받은 아규먼트의 값을 나타낸다.
    
    // 3-6. Rest Parameter : 일반 파라미터 앞에 마침표 3개를 붙여주는 것
    // Rest Parameter는 인자를 배열로 받는 것이다. (일반파라미터와 함께 사용할 수 있음)
    // function func1(...args) { 
    //     for (const arg of args) { 
    //         console.log(arg);
    //     }
    //     console.log('-----------')
    // };
    
    // 3-7. Arrow Function : 이름이 없는 익명함수이다.
    // 이름을 가진 변수에 할당하거나, 다른 함수의 아규먼트로 선언할 때 주로 사용된다.
    // 예시 : (number) => {...}
    // (1) 파라미터가 하나인 경우 소괄호 생략가능 : number => {...} // 파라미터가 두개 이상이거나 없는 경우 반드시 소괄호 표시해야한다.
    // (2) 내부 동작이 return문 하나로만 이루어져 있으면 중괄호와, return 생략 가능 : (a, b) => a + b; 
    // (3) 리턴값이 객체인 경우 리턴과 중괄호를 생략하고 싶으면 객체를 소괄호로 한번 감싸야한다
    //      : const getCodeit = () => ({name:'Codeit'});
    // (4) 애로우 펑션에선 arguments 객체를 사용할 수없다. / rest parameter는 가능
    // (5) 애로우 퐁션에서 this는 애로우 펑션이 동작하기 직전의 this 값을 담고 있다.
    //     일반함수와 this 동작 방식이 다름에 유의하자.
    
    // 3-8. (삼항 연산자) 조건 ? truthy 할 때 표현식 : falsy 할 때 표현식
}



{ // 4. this.
    // 브라우저에서 자바스크립트가 동작하는 경우 window객체가 this의 default 이다.
    console.log(this); 
    
    // 그러나 this는 함수 내부에서 주로 사용되고 객체의 메소드를 만들 때 주로 사용된다.
    // this는 함수를 호출한 객체를 가리키는 키워드이다.    

    function getFullName() { 
        return `${this.firstName} ${this.lastname}`;
    }

    const user = {
        firstName: 'Tess',
        lastName: 'Jang',
        getFullName: getFullName,
    };

    const admin = {
        firstName: 'Alex',
        lastname: 'Kim',
        getFullName: getFullName,
    };

    console.log(user.getFullName());    // 호출한 객체가 user
    console.log(admin.getFullName());   // 호출한 객체가 admin
}




{ // 5. Spread 구문(Spread Syntax)
    { // 5-1. 배열복사1
        const numbers = [1, 2, 3];
        console.log(...numbers);    // 대괄호가 벗겨지고 각각의 개별 값으로 펼처준다.

        const webPublishing = ['HTML', 'CSS'];
        const interactiveWeb = webPublishing;

        interactiveWeb.push('JavaScript');

        console.log(webPublishing);     // ['HTML', 'CSS', 'JavaScript']
        console.log(interactiveWeb);    // ['HTML', 'CSS', 'JavaScript']
    }
    { // 5-2. 배열복사2
        const webPublishing = ['HTML', 'CSS'];
        const interactiveWeb = webPublishing.slice();   // 이렇게 복사해야함

        interactiveWeb.push('JavaScript');

        console.log(webPublishing);     // ['HTML', 'CSS']
        console.log(interactiveWeb);    // ['HTML', 'CSS', 'JavaScript']
    }
    { // 5-3. 배열복사3
        const webPublishing = ['HTML', 'CSS'];
        const interactiveWeb = [...webPublishing, 'JavaScript'];

        console.log(webPublishing);     // ['HTML', 'CSS']
        console.log(interactiveWeb);    // ['HTML', 'CSS', 'JavaScript']
    }
    { // 5-4. 배열 병합
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];

        const arr3 = [...arr1, ...arr2];
        console.log(arr3);  // [1, 2, 3, 4, 5, 6]
    }
    { // 5-5. 전달할 함수의 아규먼트가 여러개 일 때 배열로 묶은뒤 스프래드로 펼쳐서 한번에 전달 가능.
        const args = [1, 2, 3]
        function funcSum(a, b, c) {
            return a + b + c
        }
        funcSum(...args); // 이러면 인자로 1, 2, 3, 넣은것과 같음
    }
    { // 5-6. 스프레드를 {}로 감싸서 객체로 만들면
        // 인덱스를 key값으로, 배열의 요소를 value로 하는 객체(JSON)가 만들어진다.
        const arr = ['hello', 'world'];
        const obj = { ...arr }; // {0:'hello', 1:'world'};
    }
}



{ // 6. 모던한 프로퍼티 표기법
    { // 6-1. 
        const title = 'Codeit';
        const birth = 2017;
        const job = '프로그래밍 강사';
    
        const user = {  // 프로퍼티의 이름과, 변수의 이름이 같은 경우 아래 처럼 생략해서 객체 생성 가능
            title,      // 필드값 뿐만아니라 메소드도 생략가능
            birth,
            job,
            // 메소드 축약형 표현
            funcName() { 
                return 'something'
            }
        }
    }
    { // 6-2. 계산된 프로퍼티
        // const user = {
        //     [표현식] : 값,
        // }
    
        const propertyName = 'birth';
        const getJob = () => 'job';

        const user = {
            ['Code' + 'it']: 'value',   // 연산식을 대괄호로 묶으면 연산 값이 프로퍼티 이름이 된다.
            [propertyName]: 2017,   // 변수를 대괄호로 묶으면 변수 값이 프로퍼티 이름이 된다.
            [getJob()]: '프로그래밍 강사'   // 함수를 대괄호로 묶으면 함수 리턴 값이 프로퍼티 이름이 된다.
        };

        console.log(user);  // {Codeit:"value", birth:2017, job:"프로그래밍 강사"}
    }
}



{ // 7. 옵셔널 체이닝 (Optional Chaining)
    // 일반적으로 객체의 프로퍼티는 점 표기법으로 접근
    function printCatName(user) { 
        // 옵셔널 체이닝 연산자 ?. 왼편이 undefiend or null 이면 그다음 프로퍼티값을 리턴하지 않고, 그렇지 않은 경우에는 undefined를 반환하는 문법
        console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
    }
}



{ // 8. 구조분해(Destructuring)
    { // 8-1. 배열
        // const rank = ['효준', '유나', '민환', '재하', '규식'];
        // // const macbook = rank[0]; // 효준
        // // const ipad = rank[1] // 유나
        // // const airpods = rank[2] // 민환
        // // const coupon = rank[3] // 재하
        // const [macbook, ipad, airpods, coupon] = rank;  // 변수명을 배열형태로 주면 배열을 분해해서 하나씩 할당
        
        // const rank = ['효준', '유나', '민환', '재하', '규식'];
        // const [macbook, ipad, airpods, ...coupon] = rank;   // 넘치는 요소는 coupon에 배열로 할당
        
        // const rank = ['유나', '효준', '민환'];
        // const [macbook, ipad, airpods, coupon = '없음'] = rank;

        // console.log(macbook);
        // console.log(ipad);
        // console.log(airpods);
        // console.log(coupon);

        // [macbook, ipad] = [ipad, macbook]   // 서로 변수값 스왑된다.
    }
    { // 8-2. 객체
        const macbook = {
            title: '맥북 프로 16형',
            price: 3690000,
            memory: '16 GB',
            storage: '1TB SSD 저장 장치',
            display: '16형 Retina 디스플레이',
        };

        // const title = macbook.title;
        // const price = macbook.price;
        // const { title, price } = macbook;   // 배열 분해시 [], 객체 분해시 {} // 변수이름과 객체 내 프로퍼티 이름 매칭해서 분해된다.
        // const { title, ...rest } = macbook; // 앞쪽에 우선 매칭되는 프로퍼티 할당하고 나머지는 rest에 할당
        // const { title, color = 'silver' } = macbook;    // 객체 내 프로퍼티가 없는 변수이름이 있으면  undefined를 출력하고, 기본 값을 설정해둘 수도 있다.
        // const { title: product, price: cost } = macbook;    // 객체 내 title을 product 변수에 할당, 객체 내 price 프로퍼티를 cost 변수에 할당.

        // console.log(title);
        // console.log(price);
    }
}



{ // 9. 에러
    // 9-1. 자바스크립트는 에러가 발생하면 에러에 대한 정보가 담긴 에러 객체를 생성한다.
    //      에러 객체에는 에러 name 프로퍼티와, 에러 내용을 담고 있는 message 프로퍼티가 존재한다.
    // 자주 발생하는 에러 : ReferenceError, TypeError, SyntaxError(문법 에러는 코드 실행하기도 전에 에러 발생시킨다.)
    // 예외처리는 실행이 가능한 에러를 다루기 때문에 문법 에러는 예외처리로 다룰 수 없다.

    { // 9-2. 의도적으로 에러 발생시키기
        const error = new TypeError('타입 에러가 발생했습니다.');   // 에러 정의하는 코드
        throw error;    // 에러 발생시키는 코드
    }
    { // 9-3. try catch 문
        try {
            //코드
        } catch (error) { // 에러 발생시 생성되는 error 객체가 cath 문의 파라미터로 전달.   // 이름은 e, err, 뭐로 짓든 상관 없음
            // 에러가 발생했을 때 동작할 코드
            console.error(e);       // console.error() 메소드는 에러처럼 출력해준다.
            console.log(e.name);
            console.log(e.message);
        }
    }
}



{ // 10. 배열 메소드
    {
        // 10-1. forEach : 아규먼트로 콜백 함수를 작성해주면 콜백함수의 첫번째 파라미터로
        //                 배열의 요소를 순서대로 하나씩 전달하면서, 매번 함수를 실행하는 원리로 동작한다.
        //                 그래서 반드시 파라미터 하나가 필요하다. (콜백함수 당연히 에로우 펑션으로도 작성가능)
        //                 두번째 파라미터를 입력하면 인덱스가 인자로 들어온다.
        //                 세번째 파라미터를 입력하면 forEach 메소드를 호출한 배열이 전달된다.
        //                 반환값은 undefined 이다.
        const members = ['영훈', '윤수', '동욱', '태호'];
        for (let member of members) { 
            console.log(`${member}님이 입장하셨습니다.`)
        }

        members.forEach((member, i, arr) => {
            console.log(`${member}님이 ${i}번째로 입장하셨습니다.`);
        });
    }
    {
        // 10-2. map : forEach와 거의 같은 방식으로 동작한다.
        //             차이점은 각각의 리턴값으로 구성된 새로운 배열이 이 메소드의 결과로 반환된다는 것
        const firstNames = ['영훈', '윤수', '동욱', '태호'];
        const lastNames = ['강', '이', '손', '성'];

        const fullNames = firstNames.map((firstName, i) => lastNames[i] + firstName);

        console.log(fullNames); // ['강영훈', '이윤수', '손동욱', '성태호']
        // 단순한 반복 작업은 forEach, 반복작업 결과 배열 리턴은 map 사용
    }
    
    const devices = [
        { name: 'GalaxyNote', brand: 'Samsung' },
        { name: 'MacbookPro', brand: 'Apple' },
        { name: 'iPad', brand: 'Apple' },
        { name: 'GalaxyWatch', brand: 'Samsung' },
        { name: 'iMac', brand: 'Apple' },
        { name: 'GalaxyBuds', brand: 'Samsung' },
        { name: 'Gram', brand: 'LG' },
        { name: 'GalaxyBook', brand: 'Samsung' },
        { name: 'SurfacePro', brand: 'Microsoft' },
        { name: 'ZenBook', brand: 'Asus' },
        { name: 'MacbookAir', brand: 'Apple' },
    ];
    { // 10-3. filter : 특별한 조건을 만족하는 것만 추려서 배열을 만들어 준다.
        const apples = devices.filter((el) => el.brand === 'Apple');    // 조건식을 삽입하면 조건을 만족하는 경우 새로운 배열에 담긴다.
        console.log(apples);
        // 그런데 filter 메소드는 항상 리턴 값이 배열이기 때문에 요소가 하나라도 스프레드 같은 구문으로 배열을 벗겨내야한다.
        // 조건을 만족하는 모든 값을 찾고 종료
        const myLaptop = devices.filter((el) => el.name === 'Gram');
        console.log(...myLaptop);
    }
    { // 10-4. find : 반환 값이 배열이 아니고 배열의 요소 하나를 찾을 때 주로 씀 (조건 만족하는 값 하나만 찾으면 종료)
        const myLaptop = devices.find((el) => el.name === 'Gram');
        console.log(myLaptop);
    }
    { // 10-5. some과 every
        const numbers = [1, 3, 5, 7, 9]
        // some : 조건을 만족하는 요소가 1개 이상 있는지 확인 (맞는 것 1개만 찾으면 반복 종료)
        // 만약 빈 배열이면 무조건 false 반환
        const someReturn = numbers.some((el) => el > 5);
        // every : 모든 요소가 조건을 만족하는지 확인 (틀린 것 1개라도 찾으면 반복 종료)
        // 만약 빈 배열이면 무조건 true 반환
        const everyReturn = numbers.every((el) => el > 5);

        console.log('some:', someReturn);
        console.log('every', everyReturn);
    }
    { // 11. reduce : 
        const numbers = [1, 2, 3, 4];

        // 첫번째는 누산기로 직전에 동작한 콜백 함수가 리턴한 값을 전달 받는 파라미터이다.
        // 그런데 첫번째 acc는 전달받을 직전 동작이 없다. 그래서 reduce의 두번째 파라미터로 
        // 초기값 initialAccValue를 설정해준다.
        // 두번째는 배열의 요소가 전달되고, 세번째는 인덱스, 네번째는 배열전체가 전달
        numbers.reduce((acc, el, i, arr) => {
            return nextAccValue;
        }, initialAccValue);   

        const sumAll = numbers.reduce((acc, el, i) => {
            console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`)
            console.log('acc:', acc);
            console.log('el:', el);
            console.log('----------');
            return acc + el;
        }, 0);
        console.log('sumAll:', sumAll);
    }


}


