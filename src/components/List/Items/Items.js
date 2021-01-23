import React from "react";
import PropTypes from "prop-types";
import classes from "./Items.module.css";

const Item = ({ name, number, oops }) => {
  return (
    <li className={classes.li}>
      <p className={classes.p}>
        {name}: {number}
      </p>
      <button type="button" onClick={oops} className={classes.button}>
        Delete
      </button>
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  oops: PropTypes.func.isRequired,
};

export default Item;
