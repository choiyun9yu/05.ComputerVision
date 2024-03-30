"use strict";

// 1. Optional Chaining
// console.log(person.job?.manager?.name);

{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            }
        },
    };
    const person2 = {
        name: 'Bob',
    }

    // very bad code
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);  // Bob 출력
        // printManager(person2);  // job, manager가 없어서 에러 뜸
    }
console.log('----------');
    // nomal code
    {
        function printManager(person) {
            console.log(
                person.job
                    ?person.job.manager
                        ?person.job.manager.name
                        : undefined
                    : undefined
            );
        }
        printManager(person1);  // Bob 출력
        printManager(person2);  // undefined 출력
    }
console.log('----------');
    // good code
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1);  // Bob 출력
        printManager(person2);  // undefined 출력
    }
}


// 2. Nullish Calescing Operator (ES11)
{
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest'; //XOR, 배타적 선언같은 것이다
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || 'Guest'; 
        console.log(userName);
    }

    // bad code
    {
        const name = '';    
        // 아무것도 지정되지 않은 경우에만 Guest를 할당하고 싶은데 
        // 빈 문자열이 할당되었어도 false로 인식하여 Guest가 할당되는 문제
        // 숫자 0도 마찬가지
        const userName = name || 'Guest'; 
        console.log(userName);
    }

    // good code
    {
        const name = '';
        const userName = name ?? 'Guest';   // 이름이 있다면 이름을 쓰고 없으면 undefined 작성하자
        console.log(userName);

        const num = 0;
        const userNum = num ?? 'Guest';   // num 있다면 이름을 쓰고 없으면 undefined 작성하자
        console.log(num);
    }
}