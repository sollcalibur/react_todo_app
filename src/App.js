import React from "react";
import "./App.css";
import Home from "./containers/home/home";
import ViewTodo from "./containers/home/viewtodo/viewtodo";
import About from "./containers/about/about";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <h1>Todo List</h1>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/viewtodo/:id" component={ViewTodo}></Route>
            <Route path="/about" component={About}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
