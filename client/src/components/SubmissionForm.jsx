import { useSWRConfig } from "swr";
import axiosCustom from "../libs/axios";
import SubmissionFormStyle from "../styles/components/SubmissionForm.styled";
import ButtonStyle from "../styles/components/Button.styled";
import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { toast } from "react-hot-toast";

const SubmissionForm = () => {
  const { mutate } = useSWRConfig();
  const [loading, setLoading] = useState(false);

  const submitStreamerHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    try {
      await axiosCustom.post("streamers", formJson);
      toast.success("New Streamer added!");
      mutate("streamers");
      e.target.reset();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SubmissionFormStyle.Form action="post" onSubmit={submitStreamerHandler}>
      <h3>Add New Streamer</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input
          minLength={3}
          maxLength={20}
          required
          type="text"
          name="name"
          id="name"
        />
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
          required
          minLength={10}
          name="description"
          id="description"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <ButtonStyle disabled={loading} type="submit">
        {loading ? <BarLoader width={100} /> : "Submit"}
      </ButtonStyle>
    </SubmissionFormStyle.Form>
  );
};
export default SubmissionForm;
