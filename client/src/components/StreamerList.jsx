import useSWRC from "../libs/useSWRC";
import Layout from "../styles/Layout.styled";

const StreamerList = () => {
  const { data: streamers, isLoading } = useSWRC("streamers");
  console.log(streamers);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout.Box>
      <ul>
        {streamers.map((streamer) => (
          <li key={streamer.id}>{streamer.name}</li>
        ))}
      </ul>
    </Layout.Box>
  );
};
export default StreamerList;
