import React, { Component } from "react";
import AppNavBar from "./components/AppNavBar";
import JobList from "./components/JobList";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <JobList />
      </div>
    );
  }
}

export default App;
