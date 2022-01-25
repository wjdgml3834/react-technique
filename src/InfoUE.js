import { useState, useEffect } from "react";

const InfoUE = () => {
  const [fruitName, setFruitName] = useState("");
  const [singerName, setSingerName] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었음! ");
    console.log({
      fruitName,
      singerName,
    });
  });
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
