import ErrorStyle from "../styles/components/Error.styled";

const Error = ({ error }) => {
  return (
    <ErrorStyle.Box>
      <h3>Oops!</h3>
      <br />
      <p>{error.response.data.message}</p>
    </ErrorStyle.Box>
  );
};
export default Error;
