import React, { Component } from "react";

class LikeButton extends Component {
  state = { like: false };

  toggleState = (state) => {
    console.log(this.setState({ like: !this.state.like })); // toggle the state to true or false on click
  };

  render() {
    console.log(this.state);
    const changeColour = this.state.like ? "#70d1fe" : "#fed90f";
    return (
      <div>
        <button
          className="like-button"
          onClick={this.toggleState}
          style={{ backgroundColor: changeColour }}
        >
          Like
        </button>
        {this.state.like && (
          <p className="liked-text">"You liked this quote!"</p>
        )}
      </div>
    );
  }
}

export default LikeButton;
