import React, { Component } from "react";
import Header from "./Components/Header";
import Quote from "./Components/Quote";
import Image from "./Components/Image";
import DeleteButton from "./Components/DeleteButton";
import LikeButton from "./Components/LikeButton";
import Name from "./Components/Name";
import axios from "axios";
import "./App.css";
import "./Media-Queries.css";
import { API_KEY } from "./Config";

class App extends Component {
  state = { data: [], input: "" };
  // send an empty array called data into state

  // call componentDidMount() and axios to grab the API data
  componentDidMount() {
    axios
      .get(API_KEY)
      .then((response) => {
        // add the response from the API, into the array in state
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
        alert("the API is down, please try again later");
      });
  }

  deleteButton = (position) => {
    // create a copy of the array
    const newArray = [...this.state.data];
    // spread the total number of quotes into newArray
    // use splice to remove a quote from the array
    newArray.splice(position, 1);
    this.setState({ data: newArray });
  };

  // send the event into the function, log the result to the console
  onInput = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    let filtered = [...new Set(this.state.data)];
    if (this.state.input) {
      filtered = filtered.filter((item) => {
        if (
          item.character.toLowerCase().includes(this.state.input.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
    return (
      <>
        <Header />
        <div className="input">
          <input
            type="text"
            placeholder="Search for a character"
            onInput={this.onInput}
          ></input>
        </div>
        {filtered.map((item, position) => {
          if (item.characterDirection === "Right") {
            return (
              <div className="main" key={position}>
                <div className="character-container">
                  <Name character={item.character} />
                  <div className="image-container">
                    <Image image={item.image} />
                    <Quote quote={item.quote} />
                  </div>
                  <div className="button-wrapper">
                    <DeleteButton
                      deleteButton={this.deleteButton}
                      position={position}
                    />
                    <LikeButton likeButton={this.state.LikeButton} />
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className="main">
              <div className="character-container">
                <Name character={item.character} />
                <div className="image-container">
                  <Quote quote={item.quote} />
                  <Image image={item.image} />
                </div>

                <div className="button-wrapper">
                  <DeleteButton
                    deleteButton={this.deleteButton}
                    position={position}
                  />
                  <LikeButton likeButton={this.state.LikeButton} />
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
