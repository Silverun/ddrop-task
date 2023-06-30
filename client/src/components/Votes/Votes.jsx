import { useSWRConfig } from "swr";
import axiosCustom from "../../libs/axios";
import VotesStyle from "../../styles/components/Votes.styled";
import DownVoteButton from "./DownVoteButton";
import UpVoteButton from "./UpVoteButton";
import { useState } from "react";
import useUpvoted from "../../hooks/useUpvoted";
import useDownvoted from "../../hooks/useDownvoted";

const Votes = ({ id, votes }) => {
  const { alreadyUpvoted, addToUpStorage, removeFromUpStorage } =
    useUpvoted(id);
  const { alreadyDownvoted, addToDownStorage, removeFromDownStorage } =
    useDownvoted(id);
  const { mutate } = useSWRConfig();
  const [upvoted, setUpvoted] = useState(alreadyUpvoted);
  const [downvoted, setDownvoted] = useState(alreadyDownvoted);

  const upVoteClickHandler = async (e) => {
    e.stopPropagation();
    try {
      if (alreadyUpvoted) {
        setUpvoted(false);
        removeFromUpStorage();
        await axiosCustom.put(`streamers/${id}/downvote`, { id: id });
        mutate("streamers");
        return;
      }
      if (alreadyDownvoted) {
        removeFromDownStorage();
        setDownvoted(false);
        await axiosCustom.put(`streamers/${id}/upvote`, { id: id });
      }
      await axiosCustom.put(`streamers/${id}/upvote`, { id: id });
      mutate("streamers");
      addToUpStorage();
      setUpvoted(true);
    } catch (error) {
      console.log(error);
    }
  };
  const downVoteClickHandler = async (e) => {
    e.stopPropagation();
    try {
      if (alreadyDownvoted) {
        setDownvoted(false);
        removeFromDownStorage();
        await axiosCustom.put(`streamers/${id}/upvote`, { id: id });
        mutate("streamers");
        return;
      }
      if (alreadyUpvoted) {
        removeFromUpStorage();
        setUpvoted(false);
        await axiosCustom.put(`streamers/${id}/downvote`, { id: id });
      }
      await axiosCustom.put(`streamers/${id}/downvote`, { id: id });
      mutate("streamers");
      addToDownStorage();
      setDownvoted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VotesStyle.Box>
      <UpVoteButton upvoted={upvoted} onClick={upVoteClickHandler} />
      <span>{votes}</span>
      <DownVoteButton downvoted={downvoted} onClick={downVoteClickHandler} />
    </VotesStyle.Box>
  );
};

export default Votes;
