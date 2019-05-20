import axios from "axios";

const api = axios.create({
  baseURL: "https://api.twitch.tv/"
});

export default api;

//https://api.twitch.tv/kraken/streams/
