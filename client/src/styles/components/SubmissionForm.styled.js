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

  textarea,
  select,
  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
  }
`;

const SubmissionFormStyle = {
  Form,
};

export default SubmissionFormStyle;
