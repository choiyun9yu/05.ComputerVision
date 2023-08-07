// 1. fetch 함수 : 서버로 request를 보내고 response를 받는 함수
fetch('https://www.google.com')
    .then((response) => { return response.text(); })    // 이 함수는 fetch함수가 실행될 때 바로 실행되는 함수가 아니다. 이 함수는 서버의 response가 왔을 때 실행되는데 이처럼 어던 조건이 충족되었을 때 실행되는 함수를 콜백 함수라고 한다. 
    .then((result) => { console.log(result); });    // .then이 콜백 함수를 등록해주는 프로미스의 메소드이다.


// 2. 서버가 보내주는 response
    // 2-1. JSON 
        // 자바스크립트와의 차이점: 
        // JSON의 경우 프로퍼티 이름을 반드시 큰 따옴표로 감싸줘야한다. 
        // 문자열인 경우 반드시 큰 따옴표로 감싸줘야한다.
        // 자바스크립트에서 사용하는 undefiend, NaN, infinity등은 사용할 수 없다.
        // JSON에는 주석을 추가할 수 없다. 

    // 2-2. JSON to obj
        // JSON은 기본적으로 str타입이다.
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.text())
            .then((result) => { 
                const users = JSON.parse(result) 
                console.log(users.length);
                users.forEach((user) => {   // forEach : 배열의 각 요소를 순회하면서 매번 그 파라미터로 받은 함수를 실행하는 메소드
                    console.log(user.name)
                });
            });    // JSON이라는 객체의 .parse라는 메소드 사용 JSON데이터를 자바스크립트 객체로 변환 가능


// 3. request의 종류
    // requset는 HEAD(리퀘스트에 대한 여러 부가정보, path, 메소드, request보낸 브라우저와 운영체제 정보)와 BODY(실제 데이터를 담는 부분)로 이루어져 있음 
    // 개발자 도구의 Network 탭 에서 요청 클릭해서 Headers > Request Headers 볼 수 있음 
    // 3-1. CRUD 메소드
        // 데이터 조회 : GET
        // 데이터 추가 : POST
        // 데이터 수정(덮어쓰기) : PUT
        // 데이터 삭제 : DELETE
        // 데이터 일부 수정 : PATCH 
        // 데이터 조회(바디제외) : HEAD
        // 

    // 3-2. 코드잇 학습용 : https://learn.codeit.kr/api/members
        // 데이터 조회, get
        fetch('https://learn.codeit.kr/api/members/3')
            .then((response) => response.text())
            .then((result) => {console.log(result); });
        // 데이터 입력, post
        const newMember = {
            name: 'Jerry',
            email: 'jerry@codeitmall.kr',
            department: 'engineering',
        };

        fetch('https://learn.codeit.kr/api/members', {
            method: 'POST',                     // GET 방식이 아닌 경우 메소드 명시하기
            body: JSON.stringify(newMember),    // 자바스크립트 객체를 JSON으로 만들어서 바디에 담기
        })
            .then((response) => response.text())
    .then((result) => { console.log(result); });


// 4. response
    // response도 HEAD(상태코드와 여러 부가 정보)와 BODY(실제 데이터)로 이루어져 있다.  
    // Status Code : 200(정상처리) 
    // 400번대는 클라이언트 쪽 문제, 404(URL에 해당하는 데이터를 찾을 수 없음) 
    // 500번대는 서버 쪽 문제, 
    

// 5. Header
    // Content-Type 헤더 : 주타입/서브타입 형식으로 나타낸다.
    // 현재 리퀘스트 또는 리스폰스의 바디에 들어가 있는 데이터가 어떤 타입인지 나타낸다.
    // 주 타입이 text인 경우(텍스트)
        // 일반 텍스트 : text/plain
        // CSS 코드 : text/css
        // HTML 코드 : text/html
        // JavaScript 코드 : text/javascript ...
    // 주 타입이 image인 경우(이미지)
        // image/bmp : bmp 이미지
        // image/gif : gif 이미지
        // image/png : png 이미지 ...
    // 주 타입이 audio인 경우(오디오)
        // audio/mp4 : mp4 오디오
        // audio/ogg : ogg 오디오 ...
    // 주 타입이 video인 경우(비디오)
        // video/mp4 : mp4 비디오
        // video/H264 : H264 비디오 ...
    // 위 타입들에 속하지 않는 것들은, 보통 application이라고 한다.
    // 주 타입이 application인 경우
        // application/json : JSON 데이터       <- 제이슨 나타내는 타입
        // application/octet-stream : 확인되지 않은 바이너리 파일 ...
    { 
        const newMember = {
            name: 'Jerry',
            email: 'jerry@codeit.kr',
            department: 'engineering',
        };

        fetch('http://learn.codeit.kr/api/members', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  // 컨텐츠 타입 설정
            },
            body: JSON.stringify(newMember),
            })
            .then((response) => response.text())
            .then((result) => { console.log(result); });
    }
    { 
        // 그외
        // multipart/form-data : 다양한 종류의 데이터를 하나로 합친 데이터 의미
        // 이 데이터 타입을 쓰려면 바디에 formData 객체 사용해야함
        // FormData를 사용하면 리퀘스트의 Content-Type 헤더의 값을 multipart/form-data로 자동 설정
        const formData = new FormData();
        formData.append('email', email.value);
        formData.append('password', password.value);
        formData.append('nickname', nickname.value);
        formData.append('profile', image.files[0], "me.png");

        fetch('https://learn.codeit.kr/api/members', {
        method: 'POST',
        body: formData,
        })
        .then((response) => response.text())
        .then((result) => { console.log(result); });
    }


// 6. Ajax 통신
    // 웹페이지 일부를 비동기적으로 통신하는 것
    // XMLHttpRequest 라는 객체를 통해 Ajax 통신할 수 있다.
    { // 예시 코드 근데 요즘엔 fetch 함수나 axios 패키지로 비동기통신 많이함
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://learn.codeit.kr/api/members');
        xhr.onload = function () {
        console.log(xhr.response);
        };
        xhr.onerror = function () {
        alert('Error!');
        };
        xhr.send();
    }


// 7. 비동기 통신
{ 
    console.log('Start!');

    fetch('https://jsonplaceholder.typicode.com/users') // 비동기실행, promise 객체 리턴
        .then((response) => response.text())    // 콜백은 서버로부터 리스폰스 받았을 때 실행된다.
        .then((result) => { console.log(result); });    // then메소드는 콜백을 등록만하고 다음 줄로 넘어간다.(실행여부 무관)
    
    console.log('End');
}
    { // 7-1. setTimeout 함수 : 특정 함수의 실행을 원하는 시간 만큼 뒤로 미루기 위해 사용하는 함수
        console.log('a');
        setTimeout(() => { console.log('b'); }, 2000);  // 마이크로초 단위여서 1000을 입력하면 1초 딜레이된다.
        console.log('c');
    }
    { // 7-2. setInterval 함수 : 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수
        console.log('a');
        setInterval(() => { console.log('b'); }, 2000); // 2초간격으로 반복해서 실행된다.
        console.log('c');
    }
    { // 7-3. addEventListner메소드 : DOM 객체의 메소드, 특정 이벤트가 발생했을 때 실행할 콜백을 등록할 메소드
        btn.onclick = function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
            console.log('Hello Codeit!');
        };
        // 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다. 
        btn.onclick = (e) => {
            console.log('Hello Codeit!');
        };

        btn.addEventListener('click', function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
            console.log('Hello Codeit!');
        });
        // 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다.
        btn.addEventListener('click', (e) => {
            console.log('Hello Codeit!');
        });
    }


// 8. Promise : 작업에 관한 '상태 정보'를 가지고 있는 객체
    // pending : 작업 진행중
    // fulfiled : 작업 성공
    // rejected : 작업 실패
{ // 8-1. Promise Chaining
    fetch('https://jsonplaceholder.typicode.com/users') // promise 객체(작업에 관한 '상태 정보' 담은 객체) 리턴
    // 작업이 성공하면, promise 객체는 그 성공 결과도 함께 가진다.
    // 작업이 실패하면, promise 객체는 작업 실패 이유도 함께 가진다.
        .then((response) => response.text())    // then은 프로미스객체의 메소드(프로미스가 pending -> fulfiled가 될때 실행)
        .then((result) => { console.log(result); });   
        // Promise Chaining : then 메소드 뒤에 then메소드를 이어 붙이는 것
        // then 메소드는 새로운 프로미스 객체를 리턴한다.
        // 프로미스 객체를 리턴하는 경우 : 콜백이 리턴한 프로미스와 동일한 상태와 결과를 갖게 된다.
        // 프로미스 객체가 아닌 것을 리턴하는 경우 : then 메소드가 리턴했던 프로미스 객체는 fulfiled가 되고, 콜백의 리턴값을 작업 성공 결과로 갖게된다.
        // .json()과 .text()는 프로미스 객체를 리턴하는 메소드이다. 
    
        // Promise Chaining이 필요한 경우
        // 비동기 작업을 순차적으로 수행해야 할 때, 전체 코드를 깔끔하게 나타내기 위해 사용
    console.log('Start!');
    fetch('https://jsonplaceholder.typicode.com/users') // 첫번째 작업
        .then((response) => response.text())
        .then((result) => {
            const users = JSON.parse(result);
            const { id } = users[0];
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);    // 두번째 작업
        })  // 두번째 작업은 첫번째 작업이 먼저 이루어져야 가능한 작업, (이렇게 순차적 작업이 필요할때 프로미스 체이닝 한다.)
        .then((response) => response.text())
        .then((posts) => {
            console.log(posts);
        });
    console.log('End');
}
{ // 8-2. rjected
    fetch('https://jsonplaceholder.typicode.com/users')
        // 콜백이 두개 들어가 있다. 첫번째 콜백은 프로미스 객체가 fulfiled 되었을 때 실행 -> 작업 결과물 넘어온다.
        // 두번째 콜백은 프로미스 상태가 rejected 되었을 때 실행 -> 작업 실패의 정보가 넘어온다.
        .then((response) => response.text(), (error) => { console.log(error); })
        .theon((result) => { console.log(result); });
}


// 9. catch 메소드 : 프로미스 객체가 rejected 상태가 되면 실행할 콜백함수 넣는 메소드
    // catch 메소드는 then 메소드를 살짝 변형시킨 것에 불과(then 메소드의 첫번째 파라미터에 undefined를 넣고 두번째 파라미터만 넣은것과 같다.)
    // catch 메소드는 마지막에 써야한다. catch 다음에 있는 then 메소드에서 에러가 발생하면 처리할 수 없기 때문
{ 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text())
        .then((result) => { console.log(result); })
        .catch((error) => { console.log(error); }); // catch() 메소드는 fetch가 rejected 상태가 되면 실행할 콜백을 등록하는 메소드
}


// 10. finally 메소드 : 프로미스 상태에 상관없이 항상 실행하고 싶은 코드가 있을때 사용
    // 딱히 파라미터가 필요없다.
{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text())
        .then((result) => { console.log(result); })
        .catch((error) => {
            console.log(error);
            throw new Error('from catch method');   // 에러를 처리하는 catch 메소드에서 에러가 발생하더라도
        })
        .finally(() => { console.log('exit'); } );  // finally 메소드는 실행된다. (정상이든 최악이든 항상 실행)
}


// 11. 직접 만들어보는 Promise 객체
    // Promisify : 전통적 형식의 비동기 실행 함수를 사용하는 코드를 Promise 기반의 코드로 변환하기 위해 사용
{ // 11-1. 프로미스 객체 생성코드
    const p = new Promise((resolve, reject) => {
        // executor 함수 -> resolve는 생성된 프로미스 상태를 fulfiled로 만들 수 있는 함수가 연결
        //               -> reject는 생성된 프로미스 상태를 rejected로 만들 수 있는 함수가 연결
        setTrimeout(() => { resolve('success'); }, 2000);   // resolve안에 넣은 값이 작업 성공 결과가 된다.
    });
    p.then((result) => { console.log(result); });   // 2초 후 success 출력

    const p2 = new Promise((resolve, reject) => {
        setTrimeout(() => { reject('fail'); }, 2000);   // reject 안에 넣은 값이 작업 실패 정보가 된다.
    });
    p2.catch((error) => { console.log(error); });   // 2초 후 fail 출력
}
{ // 11-2. 이미 상태가 결정된 Promise 객체 만들기
    // fulfiled 상태의 Promise 객체 만들기
    const p = Promise.resolve('success');
    // rejected 상태의 Promise 객체 만들기
    const p2 = Promise.reject(new Error('fail'));
}
{ // 11-3. all 메소드
    // all 메소드는 배열 안에 있는 모든 Promise 객체가 fulfilled 상태가 될 때까지 기다린 후 fulfilled 상태가 된다.
    // 각 Promise 객체의 작업 성공 결과들로 이루어진 배열을, 그 작업 성공 결과로 갖게 된다.
    // 1번 직원 정보
    const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
    // 2번 직원 정보
    const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
    // 3번 직원 정보
    const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());
    Promise
    .all([p1, p2, p3]) 
    
    .then((results) => {
        console.log(results); / Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
    });
}
{ // 11-4. race 메소드
    // race 메소드 내 배열 중 가장 먼저 fulfilled 상태 또는 rejected 상태가 된 Promise 객체와 같은 상태가 된다.
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

}


// 12. axios