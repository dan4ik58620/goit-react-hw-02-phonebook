import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  addContant = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form addContant={this.state.contacts} />
        <ContactList contacts={this.state.contacts}/>
      </>
    );
  }
}
export default App;
