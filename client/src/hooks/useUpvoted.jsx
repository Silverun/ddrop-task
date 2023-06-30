const useUpvoted = (id) => {
  const upVotedIds = JSON.parse(localStorage.getItem("upvoted_ids")) || [];
  const alreadyUpvoted = upVotedIds.includes(id);

  const addToUpStorage = () => {
    if (!alreadyUpvoted) {
      const newUpVotedIds = [...upVotedIds, id];
      localStorage.setItem("upvoted_ids", JSON.stringify(newUpVotedIds));
    }
  };
  const removeFromUpStorage = () => {
    const newUpVotedIds = upVotedIds.filter((upVotedId) => upVotedId !== id);
    localStorage.setItem("upvoted_ids", JSON.stringify(newUpVotedIds));
  };

  return { alreadyUpvoted, addToUpStorage, removeFromUpStorage };
};
export default useUpvoted;
