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
  const [nextId, setNextId] = useState(5);

  const brandList = brandName.map((item) => (
    <li key={item.id}>{item.brand}</li>
  ));
  return <ul>{brandList}</ul>;
};

export default IterationSample;
