import React, { Component } from "react";
import "./App.css";
import Home from "./components/home.js";

/*함수형은 state, 라이플사이클 API 사용 불가 대신 hook 사용 페이스북 오픈소스에서 권장*/
// function App() {
//   return <div>Hello</div>;
// }

class App extends Component {
  render() {
    return <Home propsName="react">사이값을 보여주는 children</Home>;
  }
}

export default App;
