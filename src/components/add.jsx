import React, { Component } from "react";

class Add extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();

    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="What I have to do"
        ></input>
        <button className="btn-add">Add</button>
      </form>
    );
  }
}

export default Add;
