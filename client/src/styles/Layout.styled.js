import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  padding: 1rem;
`;

const HomeScreenBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 80%;
  height: 80%;
  margin: 2rem auto;
`;

const Layout = {
  Box,
  HomeScreenBox,
};

export default Layout;
