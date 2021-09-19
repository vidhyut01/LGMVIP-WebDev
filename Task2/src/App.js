import Users from "./Components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
           <p class="text">LetsGrowMore</p>
            <button className="fetchbtn" onClick={this.updateState}>
            <b><i>Get Users</i></b>
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <div class="image">
          <img src="https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">

          </img>
        </div>
        <footer className="footer">
        <b><i>Made by Vidhyut Kanchan</i></b>
        </footer>
      </>
    );
  }
}

export default App;