import { styled } from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 2fr 100px;
  border-radius: 5px;
  padding: 0 15px;
  align-items: center;
  column-gap: 20px;
  transition: all 250ms;
  font-size: 1.2rem;

  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  }

  p {
    word-break: break-all;
  }
`;

const StreamerListStyle = {
  List,
  ListItem,
};

export default StreamerListStyle;
