import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import LayoutStyle from "../styles/Layout.styled";
import BarLoaderStyled from "../styles/components/BarLoader.styled";
import StreamerListStyle from "../styles/components/StreamerList.styled";
import Platform from "./Platform";

const StreamerList = () => {
  const { data: streamers, isLoading } = useSWR("streamers");
  const navigate = useNavigate();

  const streamerClickHandler = (id) => {
    navigate(`/streamer/${id}`);
  };

  if (isLoading) return <BarLoaderStyled />;

  return (
    <StreamerListStyle.List>
      {streamers.map((streamer) => (
        <StreamerListStyle.ListItem
          role="button"
          onClick={() => streamerClickHandler(streamer.id)}
          key={streamer.id}
        >
          <Platform small platform={streamer.platform} $small />
          <p>{streamer.name}</p>

          <div>{streamer.description}</div>
          <div>
            {streamer.upvotes} - {streamer.downvotes}
          </div>
        </StreamerListStyle.ListItem>
      ))}
    </StreamerListStyle.List>
  );
};
export default StreamerList;
