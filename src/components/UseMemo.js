import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
  console.log("계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseMemo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  // 선택자(== but not ===) ref를 주는 useRef
  const inputEl = useRef(null);

  // 렌더링마다 함수가 재생성되는 것을 방지하는 useCallback
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  // number or list가 변화했을때 함수 재생성 useCallback
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    // 'inputEl'이라는 ref를 가진 현재에 포커스 함수를 실행
    // ref가 바뀐다해도 컴포넌트는 렌더링되지 않는다.
    inputEl.current.focus();
  }, [number, list]);

  //2번째 파라미터인 list 배열이 변경 되었을 경우에만 getAverage함수가 호출된다
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg /*변경전getAverage(list)*/}
      </div>
    </div>
  );
};

export default UseMemo;
