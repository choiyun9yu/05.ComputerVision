"use strict";

// 1. Ternary Operator
{
    // bad code
    {
        function getResult(score) {
            let result;
            if (score > 5) {
                result = 'good';
            } else if (socre <= 5) {
                result = 'bad';
            }
            return result;
        }
    }
    // good code
    function getResult(score) {
        return score>5 ? 'good' : 'bad';
    }
}


// 2. Nullish coalescing operator
{
    // bad cdoe
    {
        function printMessage(text) {
            let message = text;
            if (text == null || text == undefined) {
                message = 'Nothing to display';
            }
            console.log(message)
        }
    }
    // good code
    {
        function printMessage(text) {
            const message = text ?? 'Nothing to display';   // text 있다면 그대로 쓰고 없으면 ?? 뒤 할당
        }
    }
    // antother code
    {
        const result = func1() ?? func2();  
        // 변수 선언할때도 사용하지만 함수 결과를 저장할 때도 사용될 수 있음
    }
}


// 3. Object Destructuring
{
    const person = {
        name : 'Julia',
        age : 20,
        phone : '01077777777',
    };
    // bad code
    {
        function displayPerson(person) {
            displayAvatar(person.name);
            displayName(person.name);
            dispalyProfile(person.name, person.age);
        }
    }
    // good code
    {
        function dispalyProfile(person) {
            const { name, age } = person;
            displayAvatar(name);
            displayName(name);
            dispalyProfile(name, age); 
        }
    }


// 4. Spread Syntax - Object, Array 모두 사용 가능
{
    const item = { type: 'shirt', size: 'M'};
    const detail = { price: 20, made: 'Korea', gender: 'M' };

    // bad code (수동적 결함)
    {
        const newObject = new Object();
        newObject['type'] = item.type;
        newObject['size'] = item.size;
        newObject['price'] = detail.price;
        newObject['made'] = detail.made;
        newObject['gender'] = detail.gender;
    }
    // good code (새로운 오브젝트 만들어서 병합) 
    {
        const newObject = Object.assign(tiem, detail); // 과거 문법
    }
    // better code
    {
        const newObject = {...item, ...detail}; // 업데이트하는 것이 용이하다.
        const newObject2 = {...item, ...detail, price:40};  // 기존데이터 그대로 두고 price만 덮어 씌움
    }
}



}


