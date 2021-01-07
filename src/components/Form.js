import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Form extends Component {
  state = {
    name: "",
    id: "",
    number: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("", event.target);
    const newContact = {
      name: this.state.name,
      id: uuidv4(),
      number: this.state.number,
    };
    console.log(newContact);
    console.log("props", this.props);
    this.props.addContact(newContact);
  };

  handleChange = (event) => {
    console.log("change", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={this.handleChange}
          id="name"
          type="text"
          placeholder="Enter your name,please"
        />
        <label htmlFor="">Number</label>
        <input
          name="number"
          id="number"
          type="tel"
          placeholder="Enter your number"
          onChange={this.handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default Form;
