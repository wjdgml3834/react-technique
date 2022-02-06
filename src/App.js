import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;

// Route라는 컴포넌트를 사용하여 사용자의 현재 경로에 따라 다른 컴포넌트를 보여준다.
// 사용 방식은 <Route path="주소규칙" component={보여 줄 컴포넌트 } />
