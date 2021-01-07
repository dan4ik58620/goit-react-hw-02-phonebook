import React from "react";

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <>
      <ul>
        <h2>Contact list</h2>
        {contacts.map((elem) => {
          console.log(elem);
          return (
            <li key={elem.id}>
              <h3>{elem.name}</h3>
              <p>{elem.number}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
