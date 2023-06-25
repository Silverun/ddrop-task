import { useParams } from "react-router-dom";

const StreamerInfo = () => {
  const { streamerId } = useParams();

  return <div>StreamerInfo - {streamerId}</div>;
};
export default StreamerInfo;
