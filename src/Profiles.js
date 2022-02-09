import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/kakao">
            카카오
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/naver">
            네이버
          </NavLink>
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
