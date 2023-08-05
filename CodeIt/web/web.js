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
        // 데이터 수정 : PUT
        // 데이터 삭제 : DELETE

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