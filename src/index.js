import React from "react";
// 리액트를 불러와서 사용할 수  있게 해준다.
// 프로젝트 생성 과정에서 node_modules 디렉토리에 react 모듈이 설치된다.
// 그리고 이렇게 import 구문을 통해 리액트를 불러와서 사용할 수 있는 것이다.
// 이렇게 모듈을 불러와서 사용하는 것은 원래 브라우저에는 없던 기능이다.
// 브라우저가 아닌 환경에서 자바스크립트를 실행할 수 있게 해주는 환경인 노드js에서 지원하는 기능이다.

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// 이 코드는 컴포넌트를 페이지에 렌더링 하는 역할을 한다.  react-dom 모듈을 불러와 사용할 수 있습니다.
// 이 함수의 첫 번째 파라미터에는 페이지에 렌더링할 내용을 JSX 형태로 작성하고,
// 두 번째 파라미터에는 해당 JSX를 렌더링할 document 내부 요소를 설정합니다.
// 여기서는 id가 root인 요소 안에 렌더링을 하도록 설정했는데요. 이 요소는 public/index.html 파일을 열어 보면 있답니다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
