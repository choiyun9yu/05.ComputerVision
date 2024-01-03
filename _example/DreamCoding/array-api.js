'use strict';

// Q1. make a string out of an array
{   // join(sep) : arr to str
    const fruits = ['apple', 'banana', 'orange'];
    const res = fruits.join(',');
    console.log(res);
}

// Q2. make an array out of a string 
{   // split(sep, arrSize) : str to arr 
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const res = fruits.split(',');
    console.log(res);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{   // reverse() : 역정렬 (inplace true임) 
    const arr = [1, 2, 3, 4, 5];
    const res = arr.reverse();
    console.log(res);
}

// Q4. make new array without the first two elemetns
{   // splice(start, end) : 슬라이싱
    const arr = [1, 2, 3, 4, 5];
    const res = arr.slice(2);
    console.log(res);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('F', 18, true, 88)
];

// Q5. find students with the score 90
{   // find(불리언타입 리턴하는 콜백 함수), 콜백함수는 배열에 있는 모든 요소들마다 하나씩 리턴
    const res = students.find( (item) => item.score === 90 );
    console.log(res);
}

// Q6. make an array of enrolled studuents
{   // find()는 첫번째 요소만 반환하니까 filter 사용 가능
    const res = students.filter( (student) => student.enrolled === true );
    console.log(res);
}

// Q7. make an array containing only the students' scores
//     reustl shold be : [45, 80, 90, 66, 88]
{   // map() : 지정된 콜백함수를 호출하면서 각각의 요소를 새로운 값으로 변환한다.
    const res = students.map(( student) => student.score );
    console.log(res);
}

// Q8. check if there is a student with the score lower than 50
{   // some() : 배열의 요소 중 콜백함수의 값이 true인 요소가 있는지 확인
    // every() : 배열의 요소 모두가 콜백함수의 값이 ture인지 확인
    const res = students.some( (student) => student.score < 50 )
    console.log(res);
}

// Q9. compute students' average score
{   // reduce(callbvak, initial) :  콜백함수에서 리턴되는 값을 누적해서 전달 
    // reduceRight() : 뒤에서부터 리듀스 작업 하는 것
    // 앞에 요소들의 콜백함수 리턴 값을 가지고 다음 요소에서 콜백함수가 작동하면서 값을 계속 누적함
    console.clear();
    // const exam = students.reduce( (prev, curr) => {
    //     console.log('----------');
    //     console.log(prev)
    //     console.log(curr)
    //     return curr
    // } );

    const res = students.reduce( (pre, cur) =>  pre+cur.score, 0 )  // reduce의 이니셜 밸류 전달하면 그 값부터 시작
    console.log(res/5);
}

// Q10. make a string containing all the scores
//      result should be: '45, 80, 90, 66, 88'
{
    const res = students
        .map(student => student.score)
        .join(',');     // 메소드 묶어서 출력 -> 함수형 프로그래밍
    console.log(res);
}

// Bonus! do Q10 sorted in ascending order
//        result should be: '45, 66, 80, 88, 90'
{   // sort에는 이전값과 현재값이 전달되는데 그것을 계산한 값이 음수인지 0인지 양수인지에 따라서 정렬이 일어나는 듯
    const res = students
        .map( (student) => student.score )
        .sort( (a,b) => a-b )
        .join();
    console.log(res);
    }