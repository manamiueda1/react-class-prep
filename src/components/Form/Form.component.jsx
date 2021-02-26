import React, {Component} from "react";
import Welcome from "../Welcome/Welcome.component";


class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      savedUsername: ''
    };
  }

   

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      username: "",
      password: "",
      savedUsername: this.state.username
    });
    console.log(this.state);

    const username = event.target.username.value;
    console.log(username, 'username');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
      console.log(this.state, 'this.state')
    return (
      <div id="container">
        <Welcome welcome={this.state.savedUsername}/>
        <form onSubmit={this.handleSubmit}>
            
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form