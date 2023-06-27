import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import LayoutStyle from "../styles/Layout.styled";
import BarLoaderStyled from "../styles/components/BarLoader.styled";

const StreamerList = () => {
  const { data: streamers, isLoading } = useSWR("streamers");
  const navigate = useNavigate();

  const streamerClickHandler = (id) => {
    navigate(`/streamer/${id}`);
  };

  if (isLoading) return <BarLoaderStyled />;

  return (
    <LayoutStyle.Box>
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
    </LayoutStyle.Box>
  );
};
export default StreamerList;
