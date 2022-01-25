import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(27);

  return (
    <>
      <h1>현재 나의 나이는 {value} 입니다.</h1>
      <button onClick={() => setValue(value + 1)}>1년후</button>
      <button onClick={() => setValue(value - 1)}>1년전</button>
    </>
  );
};

export default Counter;
