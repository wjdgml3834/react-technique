import { useState, useEffect } from "react";

const InfoUE = () => {
  const [fruitName, setFruitName] = useState("");
  const [singerName, setSingerName] = useState("");

  useEffect(() => {
    console.log("렌더링");
    console.log(fruitName);
    return () => {
      console.log("clean up");
      console.log(fruitName);
    };
  }, [fruitName]);
  // 컴포넌트가 언마운트 되기전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 cleanup 함수를 반환해야한다.

  // useEffect(() => {
  //   console.log(fruitName);
  // }, [fruitName]);
  // 특정값이 업데이트 될 때만 실행시키고 싶을 때

  // useEffect(() => {
  //   console.log("마운트 될때만 실행");
  // }, []);
  // 컴포넌트가 화면에 처음 렌더링 될 때만 실행하고, 업데이트 때는 실행하지 않는다.

  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다!");
  //   console.log({
  //     fruitName,
  //     singerName,
  //   });
  // });
  // 컴포넌트가 리렌더링 될 때마다 특정 작업 수행

  const onChangeFruitName = (event) => {
    setFruitName(event.target.value);
  };
  const onChangeSingerName = (event) => {
    setSingerName(event.target.value);
  };
  return (
    <>
      <input
        placeholder="과일을 입력해주세요"
        value={fruitName}
        onChange={onChangeFruitName}
      />
      <input
        placeholder="가수를 입력해주세요"
        value={singerName}
        onChange={onChangeSingerName}
      />
      <p>진실님은 과일 {fruitName}을 좋아한다. </p>
      <p>현수님은 가수 {singerName}를 좋아한다.</p>
    </>
  );
};

export default InfoUE;
