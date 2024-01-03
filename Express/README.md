# Express.js

## 1. 프로젝트 시작하기

### 1-1. Express 설치

    % npm install Express 

### 1-2. 프로젝트 생성
#### app.js
    // Express.js 모듈 가져오기
    const Express = require('Express')
    
    // Express 애플리케이션 생성
    const app = Express();
    
    // 루트 경로에 "Hello World!" 출력
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // 서버를 3000 포트에서 실행
    const PORT = 3030;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

### 1-3. 프로젝트 실행

    % node app.js

### 1-4. 프로젝트 구조

    my-Express-app/
    |-- node_modules/          // npm 패키지들이 설치되는 디렉토리
    |-- public/                // 정적 파일 (이미지, CSS, 클라이언트 사이드 JavaScript 등)
    |   |-- images/
    |   |-- styles/
    |-- routes/                // Express 라우터들을 포함하는 디렉토리
    |   |-- routes.js           // 기본 라우터 (예: 홈 페이지)
    |   |-- users.js           // 사용자와 관련된 라우터
    |-- controllers/           // 라우터에서 사용하는 컨트롤러 함수들을 포함하는 디렉토리
    |   |-- userController.js  // 사용자와 관련된 컨트롤러
    |-- models/                // 데이터 모델들을 정의하는 디렉토리
    |   |-- user.js            // 사용자 모델
    |-- views/                 // 템플릿 파일들 (옵션, 주로 MVC 패턴에서 사용)
    |-- app.js                 // Express 애플리케이션의 진입점
    |-- package.json           // 프로젝트의 메타데이터와 의존성 관리
    |-- package-lock.json      // 패키지 버전 잠금 파일
    |-- .gitignore             // Git이 무시해야 하는 파일 및 디렉토리 목록
    |-- README.md              // 프로젝트에 대한 간단한 설명이나 문서

<br>
<br>

## 2. 데이터베이스 사용하기

### 2-1. MongoDB 아직 연동 안됨

    // 설치
    % npm install mongoose

    
