import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <img
        alt="Simpsons Character"
        src={this.props.image}
        className="character-image"
      />
    );
  }
}

export default Image;
