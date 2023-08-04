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




// 5. 