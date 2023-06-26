import StreamerList from "../components/StreamerList";
import SubmissionForm from "../components/SubmissionForm";
import Layout from "../styles/Layout.styled";

const Home = () => {
  return (
    <Layout.HomeScreenBox>
      <SubmissionForm />
      <StreamerList />
    </Layout.HomeScreenBox>
  );
};

export default Home;
