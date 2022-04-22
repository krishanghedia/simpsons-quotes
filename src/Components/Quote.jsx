import React, { Component } from "react";
class Quote extends Component {
  render() {
    return (
      <div className="character-quote-container">
        <div className="character-quote-inner">
          <p className="quote-text">"{this.props.quote}"</p>
        </div>
      </div>
    );
  }
}
export default Quote;
