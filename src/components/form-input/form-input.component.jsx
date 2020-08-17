import React from "react";
import "./form-input.styles.scss";
// presentational component = functional component w/o state
// we use label props to selectively render the label
// check the styling file
// as soon as input is focused the label font size is shrink!
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label `}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
