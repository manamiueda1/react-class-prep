import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home.component";
import StudentList from "./components/StudentList/StudentList.component";
import Form from "./components/Form/Form.component";
import Welcome from "./components/Welcome/Welcome.component";
import Search from "./components/Search/Search.component";
import Movies from "./components/Movies/Movies.component";
import SingleMovie from "./components/SingleMovie/SingleMovie.component";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={StudentList} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movie/:id" component={SingleMovie} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
