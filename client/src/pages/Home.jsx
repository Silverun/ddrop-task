import { Toaster } from "react-hot-toast";
import StreamerList from "../components/StreamerList";
import SubmissionForm from "../components/SubmissionForm";
import HomeStyle from "../styles/pages/Home.styled";

const Home = () => {
  return (
    <HomeStyle.Box>
      <Toaster />
      <SubmissionForm />
      <StreamerList />
    </HomeStyle.Box>
  );
};

export default Home;
