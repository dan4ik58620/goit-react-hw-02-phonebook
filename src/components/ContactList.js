import React from "react";

const ContactList = ({ contacts }) => {
  console.log("Contacts", contacts);
  return (
    <>
      <ul>
        <h2>Contact List</h2>
        {contacts.map((elem) => {
          console.log(elem);
          return (
            <li key={elem.id}>
              <h3>{elem.name}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;