import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/home.js";
import Home2 from "./components/home2.js";
import Event from "./components/event.js";
import EventForm from "./components/eventForm.js";
import Vaildation from "./components/Vaildation.js";
import Iteration from "./components/iteration.js";
import IterationObject from "./components/iterationObject.js";
import Info from "./components/Info.js";
import ReducerGo from "./components/UseReducer.js";
import UseMemo from "./components/UseMemo.js";
import About from "./components/About.js";
import Links from "./components/Links.js";
import Profile from "./components/Profile.js";
import Query from "./components/Query.js";

class App extends Component {
  render() {
    return (
      <div>
        {/*Switch 컴포넌트로 Route를 감싸면 일치하는 단 하나의 라우트만을 렌더링 시켜줄수 있다. */}
        <Switch>
        {/*exact를 사용하면, 매칭이 될 경우 하위 라우트 설정을 보지 않게 됩니다.*/}
        <Route path="/About" component={About} exact={true} />
        <Route path={["/Links","/Links2"]} component={Links} exact={true} />
        </Switch>
        <Home propsName="react">사이값을 보여주는 children</Home>
        <Home2></Home2>
        <Event></Event>
        <EventForm></EventForm>
        <Vaildation></Vaildation>
        <Iteration></Iteration>
        <IterationObject></IterationObject>
        <Info></Info>
        <ReducerGo></ReducerGo>
        <UseMemo></UseMemo>
        <Link to="/profile/velopert">velopert 프로필</Link>
        <Link to="/profile/gildong">gildong 프로필</Link>
        <Route path="/profile/:username2" component={Profile}/>
        <Route path="/Query" component={Query} exact={true}/>
      </div>
    );
  }
}

export default App;
