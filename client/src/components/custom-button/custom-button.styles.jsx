import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: orange;
    color: black;
  }
`;

const invertStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  position: absolute;
  top: 55%;
  width: 45%;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

const GoogleStyle = css`
  background-color: #4285f4;
  border: none;
  &:hover {
    background-color: #34a853;
    color: white;
  }
`;

// since it's javascript, we can write function
const getButtonStyles = (props) => {
  if (props.isGoogle) {
    return GoogleStyle;
  }
  return props.inverted ? invertStyles : buttonStyles;
};

// it also support SASS syntax!
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  margin: 5px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Roboto";
  font-weight: bolder;
  cursor: pointer;
  transition: 0.35s all ease-in-out;
  ${getButtonStyles}
`;
