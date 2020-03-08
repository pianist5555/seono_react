import React, { useState, useMemo } from "react";

const getAverage = numbers => {
  console.log("계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseMemo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  //2번째 파라미터인 list 배열이 변경 되었을 경우에만 getAverage함수가 호출된다
  const avg = useMemo(()=>getAverage(list),[list])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg/*변경전getAverage(list)*/}
      </div>
    </div>
  );
};

export default UseMemo;
