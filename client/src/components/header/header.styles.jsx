import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 90%;
  width: 120px;
  padding: 30px;
  margin-left: 80px;
`;

// use styled as function and pass in the component you want to style

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const OptionStyles = css`
  padding: 10px 15px;
  font-size: 28px;
  margin: 15px;
  border-bottom: 2px solid black;
  cursor: pointer;
`;
// if you want to share styles use css and then call it like a variable
export const OptionLink = styled(Link)`
  ${OptionStyles}
`;
// export const OptionDiv = styled.div`
//   ${OptionStyles}
// `;
