import "bootstrap";
import "./starter-template.css";

import React, { Component } from "react";

import Main from "./Main";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
