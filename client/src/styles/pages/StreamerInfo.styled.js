import { styled } from "styled-components";

const Box = styled.div`
  display: grid;
  grid-template-columns: 80% auto;
  gap: 1rem;
  width: 80%;
  height: 80%;
  margin: 2rem auto;

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
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
