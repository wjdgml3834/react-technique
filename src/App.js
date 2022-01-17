import logo from "./logo.svg";
import "./App.css";
// 웹팩을 사용하면 SVG 파일과 CSS파일도 불러와서 사용할 수 있다.
// 이렇게 파일들을 불러오는 것은 웹팩의 로더(loader)라는 기능이 담당한다.
// 예를들어 css-loader는 CSS파일을 불러올수 있게 해주고
// file-loader는 웹 폰트나 미디어 파일 등을 불러올 수 있게 해준다.
// 그리고 babel-loader는 자바스크립트 파일을 불러오면서 최신 자바스크립트 문법으로 작성된 코드를
// 바벨이라는 도구를 사용하여 ES5문법으로 변환해준다.
// 우리가 앞으로 배우게 될 리액트 컴포넌트에서 사용하는 JSX라는 문법도 정식 자바스크립트 문법이 아니므로
// ES5 형태의 코드로 변환해야 합니다.

function App() {
  // function 키워드를 사용하여 컴포넌트를 만들었다.
  // 이러한 컴포넌트를 함수형 컴포넌트라고 한다.
  // 프로젝트에서 컴포넌트를 렌더링하면 (=보여준다) 함수에서 반환하고 있는 내용을 보여준다.
  // 함수에서 반환하는 내용을 보면 마치 HTML을 작성한것 같다.
  // 이런 코드를 JSX라고 부릅니다.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
