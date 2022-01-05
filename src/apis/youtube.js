import axios from "axios";


const KEY = 'AIzaSyBSOF6PCTn9vksZY_bNxGqJzafpVfr2vNk';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
