import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <ControlPanel />
        <List />
      </div>
    );
  }
}

export default App;
