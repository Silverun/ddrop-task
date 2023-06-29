import { styled } from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;

  span {
    font-size: 1.3rem;
  }
`;

const SvgUp = styled.svg`
  margin: 0 5px;

  &:hover {
    color: blue;
  }
`;

const SvgDown = styled.svg`
  margin: 0 5px;

  &:hover {
    color: red;
  }
`;

const VotesStyle = {
  Box,
  SvgUp,
  SvgDown,
};

export default VotesStyle;
