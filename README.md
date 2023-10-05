# JavaScript

## npm

    # npm 특정버전 업그레이드
    % sudo npm install -g npm@x.x.x

    % npm install -g n

    # node.js 특정버전 업그레이드
    % sudo n stable     // 안정 버전 설치
                    n latest      //  최신 버전 설치
                    n lts            // lts 버전 설치
                    n x.x.x        // 특정 버전 설치 ( x.x.x 버전 )

    # 버전관리
    % n ls          # 설치 목록 보기
    % sudo n        # 방향키로 버전 선택 후 엔터
    % n rm x.x.x    # 특정 버전 삭제터

## yarn

    # 설치
    % sudo npm install -g yarn
    % yarn --version
    % export PATH="$PATH:/opt/yarn-[version]/bin"

    # 사용법
    % yarn init     # 프로젝트 시작 시 초기화 하려면 (package.json 생성)
    % yarn install  # package.json 으로부터 의존성 모듈 설치

    # 의존성 모듈 설치
    % yarn add [package]
    % yarn add [package]@[version]
    % yarn add [package]@[tag]

    # 의존성 모듈 업그레이드
    $ yarn upgrade [package]
    $ yarn upgrade [package]@[version]
    $ yarn upgrade [package]@[tag]

    # 의존성 모듈 제거
    % yarn remove [package]

    # 새로 다운 받은 의존성 모듈 package.json에 반영
    % yarn
