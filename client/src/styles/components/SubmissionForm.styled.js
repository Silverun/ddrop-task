import { styled } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
  }

  label {
  }
`;

const SubmissionFormStyle = {
  Form,
};

export default SubmissionFormStyle;
