import { useSWRConfig } from "swr";
import axiosCustom from "../libs/axios";
import LayoutStyle from "../styles/Layout.styled";

const SubmissionForm = () => {
  const { mutate } = useSWRConfig();

  const submitStreamerHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    try {
      await axiosCustom.post("streamers", formJson);
      mutate("streamers");
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutStyle.Box>
      <form action="post" onSubmit={submitStreamerHandler}>
        <h3>Add New Streamer</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="platform">Choose platform</label>
          <select name="platform" id="platform">
            <option value="Twitch">Twitch</option>
            <option value="Kick">Kick</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="Rumble">Rumble</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </LayoutStyle.Box>
  );
};
export default SubmissionForm;
