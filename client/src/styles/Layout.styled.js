import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
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

const LayoutStyle = {
  Box,
  Header,
};

export default LayoutStyle;
