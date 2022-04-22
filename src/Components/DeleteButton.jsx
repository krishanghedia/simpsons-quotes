import React, { Component } from "react";

class DeleteButton extends Component {
  render() {
    return (
      <button
        className="delete-button"
        onClick={() => this.props.deleteButton(this.props.position)}
      >
        Delete Quote
      </button>
    );
  }
}

export default DeleteButton;
