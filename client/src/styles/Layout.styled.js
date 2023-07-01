import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 3px;
  padding: 1rem;
`;

const Header = styled.header`
  margin: 2rem auto;
  width: 80%;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    &:hover {
      opacity: 50%;
    }
    transition: all 1s ease-out 0s;
  }
`;

const Message = styled.p`
  margin: 2rem auto;
  font-size: 1.2rem;
`;

const LayoutStyle = {
  Box,
  Header,
  Message,
};

export default LayoutStyle;
