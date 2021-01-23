import React from "react";
import PropTypes from "prop-types";
import Item from "./Items/Items";

const List = ({ contacts, oops }) => {
  return (
    <ul>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <Item key={id} name={name} number={number} oops={() => oops(id)} />
        ))
      ) : (
        <p>Unfortunately, there is no such contact with the following name!</p>
      )}
    </ul>
  );
};

List.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
  oops: PropTypes.func.isRequired,
};
export default List;
