import { useState } from "react";

const Info = () => {
  const [fruitName, setFruitName] = useState("");
  const [singerName, setSingerName] = useState("");

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

export default Info;
