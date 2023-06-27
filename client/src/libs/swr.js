import axiosCustom from "./axios";

const fetcher = (url) => axiosCustom.get(url).then((res) => res.data);

export const options = {
  fetcher: fetcher,
};
