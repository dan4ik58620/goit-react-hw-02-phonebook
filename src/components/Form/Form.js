import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./Form.module.css";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (elem) => {
    const { name, value } = elem.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (elem) => {
    elem.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addCont(contact);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <label htmlFor="nameInput" className={classes.label}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter the name"
            onChange={this.handleChange}
            id="nameInput"
          />
        </label>

        <label htmlFor="numberInput" className={classes.label}>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            placeholder="Enter the number"
            onChange={this.handleChange}
            id="numberInput"
          />
        </label>
        <button
          type="submit"
          className={classes.button}
          disabled={!name.length || !number.length}
        >
          Add a new contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addCont: PropTypes.func.isRequired,
};
export default Form;
