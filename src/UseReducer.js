import { useReducer } from "react";

// reducer는 현재 상태,그리고 업데이트를 위해 필요한 정보를 담은 action 값을 전달받아 새로운
// 상태로 변환하는 함수이다.
function reducer(state, action) {
  // action type에 따라 다른 작업 수행
  switch (action.type) {
    case "증가":
      return { value: state.value + 1 };
    case "감소":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // useReducer의 첫번째 파라미터에는 리듀서 함수를 넣고, 두번째 파라미터에는 해당 리듀서의 기본값을 넣어줌
  // 이 Hook을 사용하면 state값과 dispatch 함수를 받아옴
  // 여기서 state는 현재 가리키고 있는 상태이고, dispatch는 액션을 발생시키는 함수이다.

  return (
    <div>
      <p>현재 카운터 값은 {state.value}</p>
      <button onClick={() => dispatch({ type: "증가" })}>+1</button>
      <button onClick={() => dispatch({ type: "감소" })}>-1</button>
    </div>
  );
};

export default Counter;
