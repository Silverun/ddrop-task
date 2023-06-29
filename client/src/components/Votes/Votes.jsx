import { useSWRConfig } from "swr";
import axiosCustom from "../../libs/axios";
import VotesStyle from "../../styles/components/Votes.styled";
import DownVoteButton from "./DownVoteButton";
import UpVoteButton from "./UpVoteButton";
import { useState } from "react";
import useUpvoted from "../../hooks/useUpvoted";

const Votes = ({ id, votes }) => {
  const { alreadyUpvoted, addToStorage } = useUpvoted(id);
  const { mutate } = useSWRConfig();
  const [upvoted, setUpvoted] = useState(alreadyUpvoted);

  const upVoteClickHandler = async (e) => {
    e.stopPropagation();
    try {
      await axiosCustom.put(`streamers/${id}/upvote`, { id: id });
      mutate("streamers");
      addToStorage();
    } catch (error) {
      console.log(error);
    }
  };
  const downVoteClickHandler = async (e) => {
    e.stopPropagation();
    try {
      await axiosCustom.put(`streamers/${id}/downvote`, { id: id });
      mutate("streamers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VotesStyle.Box>
      <UpVoteButton upvoted={upvoted} onClick={upVoteClickHandler} />
      <span>{votes}</span>
      <DownVoteButton onClick={downVoteClickHandler} />
    </VotesStyle.Box>
  );
};

export default Votes;
