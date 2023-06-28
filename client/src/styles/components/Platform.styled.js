import { styled } from "styled-components";

const Img = styled.img`
  width: ${(props) => (props.$small ? "50px" : "100px")};
  height: ${(props) => (props.$small ? "50px" : "100px")};
`;

const PlatformStyle = {
  Img,
};

export default PlatformStyle;
