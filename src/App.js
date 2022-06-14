import React from "react";
// import store from "./components/redux/flipAction";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentState: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: "TOGGLE" })
  };
};
class App extends React.Component {
  render() {
    const lightedness = this.props.currentState ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <div>
          <h1>{lightedness}</h1>
        </div>
        <button onClick={this.props.toggle}>flip</button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
