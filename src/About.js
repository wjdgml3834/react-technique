import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  // 이 설정을 통해 문자열 맨 앞의 ?를 생략한다.
  const showDetail = query.detail === "true";
  // 쿼리의 파싱 결과 값은 문자열입니다.
  return (
    <div>
      <h1>어바웃 페이지입니다.</h1>
      <p>이 페이지에서는 소개글에 대한 내용이 나오겠죠?</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요</p>}
    </div>
  );
};

export default About;
