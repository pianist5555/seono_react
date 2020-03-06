import React from "react";

const iteration = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  // <li></li>라는 사족을 붙여서 보내줌 , index라는 key값을 지정해주어 렌더링 시 리액트가 빠르게 변화를 감지할 수 있도록함
  // 다만, 고유한 값이 없을 때만 사용하는 것이 경제적임
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default iteration;
