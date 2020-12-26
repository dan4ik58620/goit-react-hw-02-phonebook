import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  state = {
    name: "",
    id: "",
  };
  handldeSubmit = (event) => {
    event.preventDeafault();
    console.log("submit", event.target);

    const newContact = {
      name: this.state.name,
      id: uuidv4(),
      number: this.state.number,
    };
    console.log(newContact);
    console.log("Props", this.props);
    this.props.addContact(newContact);
  };

  handldeChange = (event) => {
    console.log("change", event.target.value);
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handldeSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={this.handleChange}
          id="name"
          type="text"
          placeholder="Enter your name pls"
        />

        <label htmlFor="number">Number</label>
        <input
          name="number"
          onChange={this.handleChange}
          placeholder="Enter your number pls"
          id="number"
          type="telephon"
        />

        <button id="">Submit</button>
      </form>
    );
  }
}
