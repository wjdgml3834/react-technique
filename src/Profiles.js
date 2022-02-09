import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/kakao">카카오</Link>
        </li>
        <li>
          <Link to="/profiles/naver">네이버</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:companyName" component={Profile} />
    </div>
  );
};

export default Profiles;
