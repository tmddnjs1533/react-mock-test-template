# React api mock-up test template

리액트 api 테스트 시 목업을 활용하는 코드 템플릿입니다.

## package list

### Node.js

```bash
16.15.0
```

### package version

```json
{
  "dependencies": {
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/material": "^5.7.0",
    "@reduxjs/toolkit": "^1.8.1",
-    "@testing-library/jest-dom": "^5.16.4",
-    "@testing-library/react": "^12.1.5",
-    "@testing-library/user-event": "^14.2.0",
    "axios": "^0.27.2",
    "env-cmd": "^10.1.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-query": "^3.39.0",
    "react-redux": "^8.0.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.0"
  },
  "devDependencies": {
    "@types/jest": "^27.5.1",
    "@types/node": "^16.11.35",
    "@types/react": "^17.0.39",
    "@types/react-dom": "^17.0.11",
    "husky": "^8.0.1",
    "lint-staged": "^12.4.1",
    "prettier": "^2.6.2",
+    "@testing-library/jest-dom": "^5.16.4",
+    "@testing-library/react": "^12.1.5",
+    "@testing-library/user-event": "^14.2.0",
+    "cypress": "^9.7.0",
+    "eslint-plugin-cypress": "^2.12.1",
    "typescript": "^4.6.4"
  }
}
```
 
## Folder structure

```text
src -----------------------------------------------
 ㄴ components // component
 ㄴ hooks      // custom hooks
 ㄴ images     // 삽입 이미지 모음
 ㄴ pages      // 페이지 컴포넌트
 ㄴ redux      // 리덕스
 ㄴ types      // 타입 선언
 ㄴ utils      // js 유틸 함수
```

## cypress 를 이용한 E2E 테스트

E2E test 자동화 도구인 cypress를 이용하여 ui 테스트 진행

## mock api

```bash
json-server --watch ./src/mock/project-list.json --port 8080
```