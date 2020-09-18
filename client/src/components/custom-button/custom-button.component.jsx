import React from "react";
import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles";
// adding inverted prop for the cart drop down menu 'ready to checkout' button
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
