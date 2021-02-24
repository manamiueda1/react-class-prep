import React, { Component } from "react";
import Home from "./components/Home/Home.component";
import StudentList from "./components/StudentList/StudentList.component";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={StudentList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
