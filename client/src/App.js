import React, { Component } from "react";
import AppNavBar from "./components/AppNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
      </div>
    );
  }
}

export default App;
