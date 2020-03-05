import React, { Component } from "react";

class Event extends Component {
  state = {
    hello: "",
    message1: "초기값"
  };

  setStateMethod = e => {
    this.setState(
      {
        /*자바스크립트에서 객체안의 메서드에서 this는 그 메서드가 포함된 object를 가리키게 된다.*/
        /*[key]는 그안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 적용*/
        [e.target.name]: e.target.value
      },
      console.log(this.state)
    );
  };

  clearStateMethod = e => {
    if (e.key === "Enter") {
      this.setState({
        hello: "",
        message: "",
        message1: ""
      });
    }
  };

  render() {
    const { message } = this.state;
    const { message1 } = this.state;
    const { hello } = this.state;
    return (
      <div>
        <p>{message}</p>
        {/*onChange안에 함수 객체를 던짐*/}
        <input
          type="text"
          name="message"
          placeholder="send me"
          onChange={this.setStateMethod}
          onKeyPress={this.clearStateMethod}
        ></input>

        <p>{message1}</p>
        {/*onChange안에 함수 객체를 던짐*/}
        <input
          type="text"
          name="message1"
          placeholder="send me"
          onChange={this.setStateMethod}
          onKeyPress={this.clearStateMethod}
        ></input>
      </div>
    );
  }
}

export default Event;
