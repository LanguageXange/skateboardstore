import React from "react";
import { ContactContainer } from "./contact.styles";

const ContactPage = (props) => {
  return (
    <ContactContainer>
      <h2>
        Contact us{" "}
        <span role="img" aria-label="emoji-sunglass">
          😎
        </span>{" "}
        !
      </h2>
      <h2>info@skateboard.com</h2>
    </ContactContainer>
  );
};

export default ContactPage;
