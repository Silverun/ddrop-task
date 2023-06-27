import Layout from "../styles/Layout.styled";
import BarLoader from "react-spinners/BarLoader";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

const StreamerList = () => {
  const { data: streamers, isLoading } = useSWR("streamers");
  const navigate = useNavigate();

  const streamerClickHandler = (id) => {
    navigate(`/streamer/${id}`);
  };

  if (isLoading) return <BarLoader />;

  return (
    <Layout.Box>
      <ul>
        {streamers.map((streamer) => (
          <li
            role="button"
            onClick={() => streamerClickHandler(streamer.id)}
            key={streamer.id}
          >
            {streamer.name} {streamer.platform} {streamer.upvotes} -{" "}
            {streamer.downvotes} {streamer.description}
          </li>
        ))}
      </ul>
    </Layout.Box>
  );
};
export default StreamerList;
