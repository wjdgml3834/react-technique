import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
    </div>
  );
}

export default App;

// Route 하나에 여러개의 path를 지정하는 것은 최신 버전의 리액트 라우터 v5부터 적용된 기능
// 예전에는 다른 url에 같은 컴포넌트를 보여주려면
// <Route path="about" component={About}/>
// <Route path="/info" component={About}/>
// 이런식으로 진행했다.
// 하지만 이제 path props를 배열로 설정해주면 여러 경로에서 같은 컴포넌트를 보여줄 수 있다.
