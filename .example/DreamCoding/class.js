"use strict";

class Counter {
    constructor(callback) { // (타입스크립트는 함수의 인자가 필수인지 아닌지 명시한다)
        this.counter = 0;
        this.callback2 = callback
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback2 && this.callback2(this.counter)// 생성자의 인자로 callback 함수가 들어 왔을 때만 실행
                
        
        }
    }
}

// const coolCounter = new Counter();
// coolCounter.increase(callback); // 1
// coolCounter.increase(callback); // 2
// coolCounter.increase(callback); // 3
// coolCounter.increase(callback); // 4
// coolCounter.increase(callback); // 5

// 숫자가 5배수가 될 때마다 알 고 싶을 때!
// (1) increase 함수에 조건문으로 정의 -> counter 클래스 자체에서 작동하기 때문에 다른 곳에서 컨트롤 할 수 없다.
// (2) callback 함수로 전달 -> callback 함수만 수정하면 되니까 다형성 증가
//                             increase 전달할 때마다 함수 입력해서 불편
//                             constructor함수에 인자받음
const coolCounter = new Counter(callback);  // 생성자에 원하는 콜백함수 전달 한 번만
coolCounter.increase(); // 1
coolCounter.increase(); // 2
coolCounter.increase(); // 3
coolCounter.increase(); // 4
coolCounter.increase(); // 5

function callback(num) {
    console.log(`yo! ${num}`);
}


// 클래스 안에 모든 걸 다 때려박으면 사용하는 사람이 이해하기 어렵고 다형성도 떨어진다.
// 콜백함수를 이용해서 클래스를 만들면 다형성이 증가한다.
// 하나의 클래스에 다양한 콜백함수를 조합해서 다양한 기능을 만들 수 있음