import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import BarLoaderStyled from "../styles/components/BarLoader.styled";
import StreamerListStyle from "../styles/components/StreamerList.styled";
import Platform from "./Platform";
import Votes from "./Votes/Votes";
import LayoutStyle from "../styles/Layout.styled";
import Error from "./Error";

const StreamerList = () => {
  const { data: streamers, isLoading, error } = useSWR("streamers");
  const navigate = useNavigate();

  const streamerClickHandler = (id) => {
    navigate(`/streamer/${id}`);
  };

  if (isLoading) return <BarLoaderStyled />;
  if (error) return <Error error={error.response.data.message} />;
  if (streamers.length === 0)
    return <LayoutStyle.Message>No one here yet!</LayoutStyle.Message>;

  return (
    <StreamerListStyle.List>
      {streamers.map((streamer) => {
        let description;
        if (streamer.description.length > 50) {
          description = streamer.description.slice(0, 51) + "...";
        } else {
          description = streamer.description;
        }

        return (
          <StreamerListStyle.ListItem
            role="button"
            onClick={() => streamerClickHandler(streamer.id)}
            key={streamer.id}
          >
            <Platform small platform={streamer.platform} $small />
            <p>{streamer.name}</p>
            <div>{description}</div>
            <Votes id={streamer.id} votes={streamer.votes} />
          </StreamerListStyle.ListItem>
        );
      })}
    </StreamerListStyle.List>
  );
};
export default StreamerList;
