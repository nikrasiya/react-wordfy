import axios from "axios";

const KEY = "13e6cbb36fmsh3d5cf6a371a2f1fp16ed86jsn1004093c5d0c";

export default axios.create({
  baseURL: "https://wordsapiv1.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": KEY
  }
});
