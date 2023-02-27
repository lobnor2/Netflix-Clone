import axios from "axios";

//append the beginning url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
