# 세.모.뉴

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=Supabase&logoColor=white"/> <img src="https://img.shields.io/badge/Github-181717?style=flat&logo=Github&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub Pages-222222?style=flat&logo=GitHub Pages&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=flat&logo=GitHub Actions&logoColor=white"/>

## 세상의 모든 뉴스레터

- 어떤 서비스든, 어떤 수단으로든, 개발자의 입맛에 맞춰 뉴스레터 형태로 제공할 수 있는 서비스 (개발자가 구현만 가능하다면..ㅎ)
  - 서비스
    - API, RSS, DB 연결 가능
    - 위 기능을 제공하지 않는 경우 크롤링을 통해 정보 수집 가능
  - 수단
    - 이메일, SMS, FCM 등 어떤 형태로든 가능
- 현재 제공 중인 뉴스레터
  - 벨로그 트렌딩 상위 게시물들

## 프로젝트 구조

![구성도](https://user-images.githubusercontent.com/29947261/211145606-e078c97d-17b5-4234-af39-596052a59909.png)

- TS 기반으로 설계된 서비스로 메일링, 크롤링이 구현되어 있음

## 뉴스레터 추가하기

### 도구 만들기

- 뉴스레터의 소스를 가져오는 기능 구현하기
  - `src/infra/crawler`
- 뉴스레터를 발송하는 발송하는 수단 구현하기
  - `src/infra/발송수단`
- 뉴스레터 구독자 정보를 저장하는 수단 구현하기
  - `src/infra/db`

### 활용하기

- 각각의 뉴스레터에 맞게 템플릿을 만들고 발송하는 서비스 구현하기
  - 위의 도구들을 활용할 수 있도록 구현
  - 템플릿 `src/template`
  - 발송하는 서비스 `src/service/newsletter`
- 발송하기
  - `src/index.ts` 에 서비스에 도구들을 인자로 넘겨 실행되도록 구현

### 클라이언트

- client 브런치에서 확인 가능
- 해당 브런치로 push시에 깃허브 액션을 통해 깃허브 페이지 배포

## 배포 화면

- [세.모.뉴](https://itjustbong.github.io/newsletter-service/)

![결과물](https://user-images.githubusercontent.com/29947261/211145604-6a63101d-ee9a-409c-87f5-ae5cac9504a5.png)
