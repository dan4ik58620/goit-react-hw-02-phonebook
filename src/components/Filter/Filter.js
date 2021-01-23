import React from "react";
import PropTypes from "prop-types";
import classes from "./Filter.module.css";

const Filter = ({ onChange }) => {
  return (
    <label htmlFor="filterInput" className={classes.label}>
      Please type the name of any contact!
      <input
        type="text"
        onChange={onChange}
        name="filter"
        className={classes.input}
        id="filterInput"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
