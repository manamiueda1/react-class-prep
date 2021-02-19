import React, { Component } from "react";
import StudentList from "./components/StudentList/StudentList.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <StudentList />
      </div>
    );
  }
}

export default App;
