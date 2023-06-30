import { styled } from "styled-components";
import { device } from "../Breakpoints";

const Box = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  width: 80%;
  height: 80%;
  margin: 2rem auto;

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
  }
`;

const Img = styled.img`
  border-radius: 10px;
  height: 150px;
  width: 150px;
`;

const StreamerInfoStyle = {
  Box,
  Img,
};

export default StreamerInfoStyle;
