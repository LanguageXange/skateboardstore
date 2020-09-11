import styled from "styled-components";

export const ContactContainer = styled.div`
  font-size: 30px;
  display: grid;
  place-items: center;

  h2 {
    margin: 5px;
  }
  video {
    margin: 18px;
    border: 8px solid black;
    :hover {
      border: 8px solid orangered;
    }
  }
`;
