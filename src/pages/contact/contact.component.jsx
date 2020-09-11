import React from "react";
import { ContactContainer } from "./contact.styles";

import Video from "../../assets/skateboardvideo.mp4";

const ContactPage = (props) => {
  return (
    <>
      <ContactContainer>
        <h2>See ya</h2>
        <h2>
          At the skateboard park{" "}
          <span role="img" aria-label="emoji-sunglass">
            😎
          </span>{" "}
        </h2>
        <video
          width="785"
          height="449"
          muted
          autoPlay
          loop
          src={Video}
          type="video/mp4"
        />
      </ContactContainer>
    </>
  );
};

export default ContactPage;
