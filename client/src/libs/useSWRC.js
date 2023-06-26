import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const backendUrl = "http://localhost:3000/";

const useSWRC = (url) => {
  const { data, error, isLoading } = useSWR(backendUrl + url, fetcher);

  return { data, error, isLoading };
};

export default useSWRC;
