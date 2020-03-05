import React, { Component } from "react";

class Event extends Component {
  state = {
    hello: "",
    message1: "초기값"
  };

  setStateMethod = e => {
    this.setState({ message: e.target.value }, console.log(this.state));
  };

  render() {
    const { message } = this.state;
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
        ></input>
      </div>
    );
  }
}

export default Event;
