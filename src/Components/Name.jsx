import React, { Component } from "react";

class Name extends Component {
  render() {
    // props sends the data into the child character component
    return <p className="character-name">{this.props.character}</p>;
  }
}

export default Name;
