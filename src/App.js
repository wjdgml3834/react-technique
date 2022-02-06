import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;

// Link 컴포넌트를 사용하여 다른 주소로 이동
// a태그와 달리 페이지 주소만 변경해주고, 페이지를 새로 불러오지는 않는다.
// 사용법: <Link to="주소">내용 </Link>
