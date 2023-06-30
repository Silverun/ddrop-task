const useDownvoted = (id) => {
  const downVotedIds = JSON.parse(localStorage.getItem("downvoted_ids")) || [];
  const alreadyDownvoted = downVotedIds.includes(id);

  const addToDownStorage = () => {
    if (!alreadyDownvoted) {
      const newDownVotedIds = [...downVotedIds, id];
      localStorage.setItem("downvoted_ids", JSON.stringify(newDownVotedIds));
    }
  };

  const removeFromDownStorage = () => {
    const newDownVotedIds = downVotedIds.filter(
      (downVotedId) => downVotedId !== id
    );
    localStorage.setItem("downvoted_ids", JSON.stringify(newDownVotedIds));
  };

  return { alreadyDownvoted, addToDownStorage, removeFromDownStorage };
};
export default useDownvoted;
