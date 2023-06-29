const useUpvoted = (id) => {
  const upVotedIds = JSON.parse(localStorage.getItem("upvoted_ids")) || [];
  const alreadyUpvoted = upVotedIds.includes(id);

  const addToStorage = () => {
    const newUpVotedIds = [...upVotedIds, id];
    localStorage.setItem("upvoted_ids", JSON.stringify(newUpVotedIds));
  };

  return { alreadyUpvoted, addToStorage };
};
export default useUpvoted;
