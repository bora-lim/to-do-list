import React, { Component } from "react";
import Add from "./add";
import List from "./list";

class Lists extends Component {
  handleComplete = (list) => {
    this.props.onComplete(list);
  };

  handleChange = (list, name) => {
    this.props.onChange(list, name);
  };

  handleDelete = (list) => {
    this.props.onDelete(list);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <div className="list-wr">
        <ul>
          {this.props.lists.map((list) => (
            <List
              key={list.id}
              list={list}
              onComplete={this.handleComplete}
              onChange={this.handleChange}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <Add onAdd={this.handleAdd} />
        <button className="btn-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Lists;
