import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import Seasons from "./Components/Seasons";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <Seasons lat={this.state.lat} />;
    }
    return (
      <div className="load">
        <div className="ui massive active centered  loader"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
