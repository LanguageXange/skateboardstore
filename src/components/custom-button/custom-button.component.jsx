import React from "react";
import "./custom-button.styles.scss";

// adding inverted prop for the cart drop down menu 'ready to checkout' button
const CustomButton = ({ children, isGoogle, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogle ? "google-signin" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
