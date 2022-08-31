import React, { Component } from "react";
import Posts from "./Posts";
import Header from "./Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Posts />
      </div>
    );
  }
}

export default App;
