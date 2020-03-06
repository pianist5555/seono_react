import React from "react";

const iteration = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  // <li></li>라는 사족을 붙여서 보내줌
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default iteration;
