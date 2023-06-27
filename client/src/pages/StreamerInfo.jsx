import { useParams } from "react-router-dom";
import useSWR from "swr";
import StreamerInfoStyle from "../styles/pages/StreamerInfo.styled";
import Platform from "../components/Platform";
import BarLoaderStyled from "../styles/components/BarLoader.styled";

const StreamerInfo = () => {
  const { streamerId } = useParams();

  const { data: streamer, isLoading } = useSWR(`streamer/${streamerId}`);

  if (isLoading) return <BarLoaderStyled />;

  return (
    <StreamerInfoStyle.Box>
      <div>
        <h3>{streamer.name}</h3>
        <p>{streamer.description}</p>
      </div>
      <div>
        <Platform platform={streamer.platform} />
        <StreamerInfoStyle.Img
          src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background-png-image_4853791.png"
          alt="streamer_pic"
        />
      </div>
    </StreamerInfoStyle.Box>
  );
};
export default StreamerInfo;
