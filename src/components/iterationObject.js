import React, { useState, Fragment } from "react";

// 리액트에서는 배열에 직접 접근하여 수정하는 것이 아니라 새로운 배열을 만들어서 대체해주는
// concat, filter등의 내장 함수를 사용한다.
const IterationObject = () => {
  const [names, setNames] = useState([
    {id: 1, text: '불사람'},
    {id: 2, text: '불'},
    {id: 3, text: '불꽃'},
    {id: 4, text: '땅'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(0);

  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  }
  
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !==id);
    setNames(nextNames);
  }
                                                      // 전달 함수객체에 이벤트를 추가해주고 있음
  const nameList = names.map(name => <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>);

  return (
    <Fragment>
    <input value={inputText} onChange={onChange}></input>
    <button onClick={onClick}>추가</button>
    <ul>{nameList}</ul>
    </Fragment>
  );
};


// hecks if the node is a React component name. React component names must always start with a non-lowercase letter
// 항상 첫글자는 대문자 해야하는 법칙이 존재 ComponentName() 함수객체에 정의되어 있다.
export default IterationObject;
