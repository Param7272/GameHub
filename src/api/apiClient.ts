import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "94f535f8d030479ea345c7e4cbef449d",
  },
});
