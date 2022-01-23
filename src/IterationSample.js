import { useState } from "react";

const IterationSample = () => {
  // 데이터배열
  const [brandName, setBrandName] = useState([
    { id: 1, brand: "Addidas" },
    { id: 2, brand: "Nike" },
    { id: 3, brand: "New Balance" },
    { id: 4, brand: "Vans" },
  ]);
  //   텍스트 입력할 수 있는 input의 상태
  const [userInp, setUserInp] = useState("");
  // 데이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id를 위한 상태
  //   4개까지 만들었으니 다음 id가 5부터 오게 설정
  const [nextId, setNextId] = useState(5);

  //  input의 value를 업데이트
  const onChange = (event) => {
    setUserInp(event.target.value);
  };
  const onClick = () => {
    //   concat을 사용하여 새로운 항목을 추가한 배열을 만들고, setBrandName을 통해 상태 업데이트
    const nextBrand = brandName.concat({
      id: nextId,
      //   nextId 값을 id로 설정
      brand: userInp,
    });
    // nextId를 1증가시킨다.
    setNextId((current) => current + 1);
    setBrandName(nextBrand);
    // input을 비운다.
    setUserInp("");
  };

  const onRemove = (id) => {
    const removeBrand = brandName.filter((item) => item.id !== id);
    // filter => 배열에서 특정 원소 제외
    setBrandName(removeBrand);
  };

  const brandList = brandName.map((item) => (
    <li key={item.id}>
      {item.brand}
      <button onClick={() => onRemove(item.id)}>삭제</button>
      {/* 인자를 전달할때는 익명함수로 한번 써주고 해야 전달 가능 */}
    </li>
  ));
  return (
    <>
      <input value={userInp} onChange={onChange} />
      <button onClick={onClick}>브랜드 추가</button>
      <ul>{brandList}</ul>
    </>
  );
};

export default IterationSample;
