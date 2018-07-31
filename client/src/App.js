import React, { Component } from "react";
import AppNavBar from "./components/AppNavBar";
import JobList from "./components/JobList";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <JobList />
        </div>
      </Provider>
    );
  }
}

export default App;
