import React, { Fragment } from "react";
import "./style.css";

// On récupère les props en utilisant le destructuring
const Textarea = ({ value, handleChange }) => {
  return (
    <Fragment>
      <form className="form-text">
        <textarea
          name="websitetext"
          id="containerText"
          value={value}
          onChange={handleChange}
        />
      </form>
    </Fragment>
  );
};

export default Textarea;
