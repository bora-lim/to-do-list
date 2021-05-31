import React, { Component } from "react";

class List extends Component {
  inputName = React.createRef();

  state = {
    modify: false,
  };

  handleComplete = () => {
    this.props.onComplete(this.props.list);
  };
  handleModify = () => {
    const modify = this.state.modify === false ? true : false;
    this.setState({ modify });
  };
  handleChange = () => {
    this.props.onChange(this.props.list, this.inputName.current.value);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.list);
  };

  render() {
    const name = this.props.list.name;
    const complete = this.props.list.complete;

    return (
      <li className="todo-list">
        <button
          className={"btn-check-" + (complete === false ? "off" : "on")}
          onClick={this.handleComplete}
        >
          <i className="fa-check-circle fas"></i>
        </button>
        {this.state.modify ? (
          <input
            ref={this.inputName}
            type="text"
            className="todo-name"
            value={name}
            onChange={this.handleChange}
          />
        ) : (
          <strong>{name}</strong>
        )}
        <button className="btn-modify" onClick={this.handleModify}>
          <i className="fas fa-eraser"></i>
        </button>
        <button className="btn-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default List;
