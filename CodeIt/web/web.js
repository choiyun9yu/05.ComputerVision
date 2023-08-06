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