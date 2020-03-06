import React from "react";

const Home = props => {
  const { propsName, children } = props;
  if ({ propsName }.propsName === "react") {
    console.log(propsName);
    
    // return에 fragment, div등에 넘겨지는 변수&함수들은 {}안에 작성
    // 반면에 자바스크립트에서 사용시 변수명 그대로 사용해도 무관
    //        자바스크립트에서 {}안에 작성하면 객체로 인식
    return (
      <div>
        {propsName} {children}
      </div>
    );
  }
};

export default Home;
