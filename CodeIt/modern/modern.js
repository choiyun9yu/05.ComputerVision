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
    // 1. 함수 선언식 : 함수 호이스팅에 의해서 선언하기전에 실행 가능!
    //                  함수 선언식에 포함된 함수는 스코프가 그 함수 안에 갇히지만
    //                  다른 블록에 선언된 함수는 불러올 수 있다.
    function func1(param) { 
        console.log(param);
    }

    // 2. 함수 표현식, 파라미터에 함수를 정의하는 것도 함수 표현식이다. (호이스팅 X)
    //                 함수선언은 결국 함수를 값처럼 사용하는 것이다.
    //                 함수 표현식은 할당된 변수에 따라서 그 스코프가 결정된다.
    const func2 = function (param) { 
        console.log(param);
    }   


    }