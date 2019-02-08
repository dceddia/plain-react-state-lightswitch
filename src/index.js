import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Room extends React.Component {
  state = {
    isLightOn: true
  };

  flipLight = () => {
    this.setState({
      isLightOn: !this.state.isLightOn
    });
  };

  render() {
    const lightedness = this.state.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));
