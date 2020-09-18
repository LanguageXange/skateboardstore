import styled from "styled-components";

export const ContactContainer = styled.div`
  font-size: 30px;
  display: grid;
  place-items: center;

  h2 {
    margin: 5px;
  }
  .pattern {
    margin: 5rem;
    background-color: rgba(32, 178, 170, 0.5);
    box-shadow: -15px 20px rgba(32, 178, 170, 0.3);
  }
  video {
    border: 8px solid black;
    box-shadow: -15px 20px rgba(32, 178, 170, 0.7);
    transform: translate(30px, -40px);
    :hover {
      border: 8px solid tomato;
    }
  }
`;
