import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Today's To Do List</h1>
        <ul className="list-count">
          <li>
            Goal : <span>{this.props.goalCount}</span>
          </li>
          <li>
            Completed : <span>{this.props.completeCount}</span>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
