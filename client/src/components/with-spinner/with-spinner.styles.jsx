import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 5px solid rgba(25, 190, 180, 0.5);
  border-radius: 50%;
  border-right-color: grey;
  animation: spin 2s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(720deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(720deg);
    }
  }
`;
