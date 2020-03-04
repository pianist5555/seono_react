import React, { Component } from "react";

class Home2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      gel: "simply code"
    };
  }
  render() {
    // 오브젝트 비구조화 할당
    const { number, gel } = this.state;
    console.log(number);
    return (
      <div>
        <h1>
          {number} {gel}
        </h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("you called me"); // 두번째 파라미터에 콜백함수
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Home2;
