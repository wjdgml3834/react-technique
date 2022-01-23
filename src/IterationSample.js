const IterationSample = () => {
  const data = ["스트릿", "아메카지", "캐쥬얼", "데님", "포멀"];
  const dataList = data.map((fashion, index) => <li key={index}>{fashion}</li>);
  // 여기서 그냥 {}쓰지 않고, <li>fashion</li> 해버리면 fashion이라는 글자만 반복된다.
  //   리액트에서 key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다.
  //   예를 들어 유동적인 데이터를 다룰때는 원소를 새로 생성할수도,제거할수도, 수정할 수도 있다.
  // key가 없을 대는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다.
  // 하지만 key가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다.
  return <ul>{dataList}</ul>;
};

export default IterationSample;
