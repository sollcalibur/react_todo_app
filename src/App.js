import React from "react";
import "./App.css";
import Home from "./containers/home/home";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
