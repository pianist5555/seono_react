import React, { Component } from "react";
import "./App.css";
import Home from "./components/home.js";
import Home2 from "./components/home2.js";
import Event from "./components/event.js";
import EventForm from "./components/eventForm.js";
import Vaildation from "./components/Vaildation.js"
import Iteration from "./components/iteration.js"
import IterationObject from "./components/iterationObject.js"
import Info from "./components/Info.js"

/*함수형은 state, 라이플사이클 API 사용 불가 대신 hook 사용 페이스북 오픈소스에서 권장*/
// function App() {
//   return <div>Hello</div>;
// }

class App extends Component {
  render() {
    return (
      <div>
        <Home propsName="react">사이값을 보여주는 children</Home>
        <Home2></Home2>
        <Event></Event>
        <EventForm></EventForm>
        <Vaildation></Vaildation>
        <Iteration></Iteration>
        <IterationObject></IterationObject>
        <Info></Info>
      </div>
    );
  }
}

export default App;
