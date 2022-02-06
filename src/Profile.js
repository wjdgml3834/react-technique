const data = {
  kakao: {
    name: "카카오톡",
    description: "한국 sns 대표 주자",
    adress: "www.kakao.com",
  },
  naver: {
    name: "네이버",
    description: "한국 웹사이트 대표 주자",
    adress: "www.naver.com",
  },
};

const Profile = ({ match }) => {
  const { companyName } = match.params;
  const profile = data[companyName];
  if (!profile) {
    return <div>존재하지 않는 회사입니다</div>;
  }
  return (
    <div>
      <h3>
        {companyName}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <p>{profile.adress}</p>
    </div>
  );
};
export default Profile;
