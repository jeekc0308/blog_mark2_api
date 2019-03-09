# blog_mark2_api
블로그 Mark2의 API 서버
API 문서: https://jeekc0308.gitbook.io/mark2-api/
MongoDB 필요

## .env 설정법
* PORT - 서버가 실행될 포트
* HOST - 서버의 호스트 값. 기본값은 express에서 보내주는 host 값.
* (* 주의: JWT 토큰의 헤더로 사용되기 때문에 다른 사이트와 안 겹치는 고유한 값이어야 한다.)
* JWT_SECRET (필요) - JWT의 Secret Key.
* DB_USERNAME - DB의 Username. 없다면 그냥 로그인된다.
* DB_PASSWORD - DB의 Password. 없다면 그냥 로그인된다.
* DB_PORT - DB가 켜져있는 포트. 없다면 기본값으로 로그인된다.
* DB_HOST - DB의 호스트. 기본값은 localhost
* DB_NAME - DB의 데이터베이스 이름. 기본값은 blog