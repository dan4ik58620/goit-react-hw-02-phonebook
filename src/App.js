import React, { Component } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Section from "./components/Section/Section";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = (elem) => {
    const { name, value } = elem.target;

    this.setState({
      [name]: value,
    });
  };

  addCont = (contact) => {
    const newName = contact.name;
    const names = this.state.contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    if (names.includes(newName.toLowerCase().trim())) {
      return alert(
        "Warning! You are trying to add contact, which has already been added!"
      );
    } else {
      this.setState((newState) => ({
        contacts: [...newState.contacts, contact],
      }));
    }
  };

  filterCont = () => {
    const { contacts, filter } = this.state;
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  deleteCont = (id) => {
    const { contacts } = this.state;
    const updateCont = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: [...updateCont],
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="PhoneBook">
          <Form addCont={this.addCont} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && <Filter onChange={this.handleChange} />}
          <List contacts={this.filterCont()} oops={this.deleteCont} />
        </Section>
      </>
    );
  }
}

export default App;
