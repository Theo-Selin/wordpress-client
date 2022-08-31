import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Post from './Post'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Posts/>}/>
          <Route path='/post/:id' element={<Post/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
