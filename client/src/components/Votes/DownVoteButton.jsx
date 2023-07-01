import VotesStyle from "../../styles/components/Votes.styled";

function DownVoteButton({ downvoted, onClick }) {
  const downvotedPath =
    "M20.901 10.566A1.001 1.001 0 0020 10h-4V3a1 1 0 00-1-1H9a1 1 0 00-1 1v7H4a1.001 1.001 0 00-.781 1.625l8 10a1 1 0 001.562 0l8-10c.24-.301.286-.712.12-1.059z";

  const defaultPath =
    "M20.901 10.566A1.001 1.001 0 0020 10h-4V3a1 1 0 00-1-1H9a1 1 0 00-1 1v7H4a1.001 1.001 0 00-.781 1.625l8 10a1 1 0 001.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399L6.081 12H10V4h4v8h3.919L12 19.399z";

  return (
    <VotesStyle.SvgDown
      viewBox="0 0 24 24"
      fill={downvoted ? "red" : "currentColor"}
      height="1.3em"
      width="1.3em"
      onClick={onClick}
    >
      <path d={downvoted ? downvotedPath : defaultPath} />
    </VotesStyle.SvgDown>
  );
}

export default DownVoteButton;
