"use strict";

// 1. Shorthand property names
{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';
    
    const ellie2 = {
        name: name,  // 변수 name에 할당된 'Ellie'가 밸류값으로 할당됨
        age: age,    // age역시 이미 선언된 변수가 있으면 그것의 값이 할당됨
    }

    const ellie3 = {
        name,   // key와 value의 이름이 같으면 이렇게 함축 가능
        age,    // key와 value의 이름이 같으면 이렇게 함축 가능
    }
}


// 2. Distructuring Assignment
{
// Object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // 안좋은 코드
    {
        const name = student.name;      // object에 접근하기 위한 방법 .
        const level = student.level;
    }

    // 좋은 코드
    {
        const { name, level } = student;    // 객체 내 프로퍼티에 접근 가능
        console.log(name,level);

        const { name: studentName, level: studentLevel } = student; // 다른 이름으로 선언하고 싶을 때
        console.log(studentName, studentLevel);
    }

    // array
    const animals = ['dog', 'cat'];

    // 안좋은 코드
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }
    {
    // 좋은 코드
        const [first, second] = animals;    // 배열과 오브젝트는 괄호 모양의 차이이다.
        console.log(first, second); 
    }
}

// 3. Spread Syntax : 참조하는 주소 값을 복사해서 원본이 변경되면 복사본도 변경 된다.
{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];   // ...은 array에 있는 요소 하나하나 낱개를 복사해 오는 것을 의미
    console.log(array, arrayCopy);

    // array copay & append
    const arrayCopy2 = [...array, { ket: 'key3' }]; // 주소 값만 복사되어 온다.
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = {...obj1 };    // object는 {} 사용하는 것만 다름
    console.log(obj3);

    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits)

    // object merge
    const dog1 = { dog: '🦮'};
    const dog2 = { dog: '🐕‍🦺'};
    const dog = {...dog1, ...dog2}; // 주의할 점은 키가 동일하면 뒤에 오는 아이가 앞의 아이의 키를 덮어 씌우게 된다.
    console.log(dog);               // 동일한 키는 마지막에 온 아이가 덮어 씌운다!
}


// 4. Default parameters
{
    // bad code
    {
        function printMessage(message) {
            // 매개변수에 인자가 입력되지 않은 경우 디폴트 출력하고 싶을 때!
            if (message == null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }

    // good code
    {   // 함수 선언시 디폴트 값을 설정해두는 것!
        function printMessage(message = 'default message') {
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}


// 5. Ternary Operaotr
{
    const isCat = true;
    // bad code
    {
        let component;
        if (isCat) {
            component = '😸';
        } else {
            component = '🐶';
        }
        console.log(component);
    }

    // good code
    const component = isCat ? '😸' : '🐶';
    console.log(component);    
}


// 6. Template Literals
{
    const weather = '🌤';
    const temparature = '16ºC';

    // bad code
    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature
    );


    // good code
    console.log(
        `Today weather is ${weather} and temparature is ${temparature}`
    );
}