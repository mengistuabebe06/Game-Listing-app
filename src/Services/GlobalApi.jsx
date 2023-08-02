import axios, { Axios } from "axios";

const key = "fe898d9435bc4f0faa2f7b9f97801907";

const axiosCreate = axios.create({
  baseURL: "https://rawg.io/api",
});

//get genres
const getGenreList = axiosCreate.get("/genres?key=" + key);
const getGameList = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default {
  getGenreList,
  getGameList,
  getGameListByGenreId,
};
