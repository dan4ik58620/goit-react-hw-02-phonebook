import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form.js";
import ContactList from "./components/ContactList.js";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };
  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        <Form addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
