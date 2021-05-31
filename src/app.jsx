import React, { Component } from "react";
import "./app.css";
import Header from "./components/header";
import Lists from "./components/lists";

class App extends Component {
  state = {
    lists: [],
  };

  handleComplete = (list) => {
    const lists = [...this.state.lists];
    const idx = lists.indexOf(list);
    lists[idx].complete = lists[idx].complete === false ? true : false;
    this.setState({ lists });
  };

  handleChange = (list, name) => {
    const lists = [...this.state.lists];
    const idx = lists.indexOf(list);
    lists[idx].name = name;
    this.setState({ lists });
  };

  handleDelete = (list) => {
    const lists = this.state.lists.filter((item) => item.id !== list.id);
    this.setState({ lists });
  };

  handleAdd = (name) => {
    const lists = [
      ...this.state.lists,
      { id: Date.now(), name: name, complete: false },
    ]; // ... spread는 부모에 선언된 props를 자식 component에 그대로 가져옴
    this.setState({ lists });
  };

  handleReset = () => {
    const lists = [];
    this.setState({ lists });
  };

  render() {
    return (
      <>
        <Header
          goalCount={this.state.lists.length}
          completeCount={
            this.state.lists.filter((item) => item.complete === true).length
          }
        />
        <Lists
          lists={this.state.lists}
          onComplete={this.handleComplete}
          onChange={this.handleChange}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
